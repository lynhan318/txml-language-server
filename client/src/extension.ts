/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from "path";
import {
  workspace,
  ExtensionContext,
  Disposable,
  TextDocument,
  Position,
  IndentAction,
  languages,
  ProviderResult,
  CancellationToken,
  TextEdit,
  FormattingOptions,
  Range,
  SemanticTokensLegend,
  SemanticTokens,
  DocumentSemanticTokensProvider,
  DocumentRangeSemanticTokensProvider,
} from "vscode";

import {
  LanguageClient,
  LanguageClientOptions,
  NotificationType,
  RequestType,
  ServerOptions,
  TextDocumentIdentifier,
  TextDocumentPositionParams,
  TransportKind,
  DocumentRangeFormattingParams,
  DocumentRangeFormattingRequest,
  ProvideCompletionItemsSignature,
  RequestType0,
  Range as LspRange,
  CommonLanguageClient,
} from "vscode-languageclient/node";
import { EMPTY_ELEMENTS } from "./htmlEmptyTagsShared";
import { activateTagClosing } from "./tagClosing";
import { RequestService } from "./requests";
import { getCustomDataSource } from "./customData";

namespace CustomDataChangedNotification {
  export const type: NotificationType<string[]> = new NotificationType(
    "html/customDataChanged"
  );
}

namespace TagCloseRequest {
  export const type: RequestType<
    TextDocumentPositionParams,
    string,
    any
  > = new RequestType("/tag");
}
// experimental: semantic tokens
interface SemanticTokenParams {
  textDocument: TextDocumentIdentifier;
  ranges?: LspRange[];
}
namespace SemanticTokenRequest {
  export const type: RequestType<
    SemanticTokenParams,
    number[] | null,
    any
  > = new RequestType("html/semanticTokens");
}
namespace SemanticTokenLegendRequest {
  export const type: RequestType0<
    { types: string[]; modifiers: string[] } | null,
    any
  > = new RequestType0("html/semanticTokenLegend");
}

namespace SettingIds {
  export const linkedEditing = "editor.linkedEditing";
  export const formatEnable = "txml.format.enable";
}

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  let toDispose = context.subscriptions;
  const customDataSource = getCustomDataSource(context.subscriptions);
  let documentSelector = ["txml"];
  let embeddedLanguages = { css: true, javascript: true };
  let rangeFormatting: Disposable | undefined = undefined;
  // The server is implemented in node
  let serverModule = context.asAbsolutePath(
    path.join("server", "out", "server.js")
  );
  // The debug options for the server
  // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
  let debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  let serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions,
    },
  };

  // Options to control the language client
  let clientOptions: LanguageClientOptions = {
    // Register the server for plain text documents
    documentSelector: [{ scheme: "file", language: "txml" }],
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      configurationSection: ["txml", "css", "javascript"], // the settings to synchronize
      fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
    initializationOptions: {
      embeddedLanguages,
      handledSchemas: ["file"],
      provideFormatter: false, // tell the server to not provide formatting capability and ignore the `html.format.enable` setting.
    },
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    "txml",
    "TXML Language Server",
    serverOptions,
    clientOptions
  );
  client.registerProposedFeatures();
  let disposable = client.start();

  // Start the client. This will also launch the server
  client.onReady().then(() => {
    client.sendNotification(
      CustomDataChangedNotification.type,
      customDataSource.uris
    );
    customDataSource.onDidChange(() => {
      client.sendNotification(
        CustomDataChangedNotification.type,
        customDataSource.uris
      );
    });

    let tagRequestor = (document: TextDocument, position: Position) => {
      let param = client.code2ProtocolConverter.asTextDocumentPositionParams(
        document,
        position
      );
      return client.sendRequest(TagCloseRequest.type, param);
    };
    disposable = activateTagClosing(
      tagRequestor,
      { txml: true },
      "txml.autoClosingTags"
    );
    toDispose.push(disposable);

    // manually register / deregister format provider based on the `html.format.enable` setting avoiding issues with late registration. See #71652.
    updateFormatterRegistration();
    toDispose.push({
      dispose: () => rangeFormatting && rangeFormatting.dispose(),
    });
    toDispose.push(
      workspace.onDidChangeConfiguration(
        (e) =>
          e.affectsConfiguration(SettingIds.formatEnable) &&
          updateFormatterRegistration()
      )
    );

    client.sendRequest(SemanticTokenLegendRequest.type).then((legend) => {
      if (legend) {
        const provider: DocumentSemanticTokensProvider &
          DocumentRangeSemanticTokensProvider = {
          provideDocumentSemanticTokens(doc) {
            const params: SemanticTokenParams = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(
                doc
              ),
            };
            return client
              .sendRequest(SemanticTokenRequest.type, params)
              .then((data) => {
                return data && new SemanticTokens(new Uint32Array(data));
              });
          },
          provideDocumentRangeSemanticTokens(doc, range) {
            const params: SemanticTokenParams = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(
                doc
              ),
              ranges: [client.code2ProtocolConverter.asRange(range)],
            };
            return client
              .sendRequest(SemanticTokenRequest.type, params)
              .then((data) => {
                return data && new SemanticTokens(new Uint32Array(data));
              });
          },
        };
        toDispose.push(
          languages.registerDocumentSemanticTokensProvider(
            documentSelector,
            provider,
            new SemanticTokensLegend(legend.types, legend.modifiers)
          )
        );
      }
    });
  });
  function updateFormatterRegistration() {
    const formatEnabled = workspace
      .getConfiguration()
      .get(SettingIds.formatEnable);
    if (!formatEnabled && rangeFormatting) {
      rangeFormatting.dispose();
      rangeFormatting = undefined;
    } else if (formatEnabled && !rangeFormatting) {
      rangeFormatting = languages.registerDocumentRangeFormattingEditProvider(
        documentSelector,
        {
          provideDocumentRangeFormattingEdits(
            document: TextDocument,
            range: Range,
            options: FormattingOptions,
            token: CancellationToken
          ): ProviderResult<TextEdit[]> {
            const filesConfig = workspace.getConfiguration("files", document);
            const fileFormattingOptions = {
              trimTrailingWhitespace: filesConfig.get<boolean>(
                "trimTrailingWhitespace"
              ),
              trimFinalNewlines: filesConfig.get<boolean>("trimFinalNewlines"),
              insertFinalNewline: filesConfig.get<boolean>(
                "insertFinalNewline"
              ),
            };
            let params: DocumentRangeFormattingParams = {
              textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(
                document
              ),
              range: client.code2ProtocolConverter.asRange(range),
              options: client.code2ProtocolConverter.asFormattingOptions(
                options,
                fileFormattingOptions
              ),
            };
            return client
              .sendRequest(DocumentRangeFormattingRequest.type, params, token)
              .then(client.protocol2CodeConverter.asTextEdits, (error) => {
                client.handleFailedRequest(
                  DocumentRangeFormattingRequest.type,
                  error,
                  []
                );
                return Promise.resolve([]);
              });
          },
        }
      );
    }
  }

  languages.setLanguageConfiguration("txml", {
    indentationRules: {
      increaseIndentPattern: /<(?!\?|(?:area|base|br|col|frame|hr|html|img|input|keygen|link|menuitem|meta|param|source|track|wbr)\b|[^>]*\/>)([-_\.A-Za-z0-9]+)(?=\s|>)\b[^>]*>(?!.*<\/\1>)|<!--(?!.*-->)|\{[^}"']*$/,
      decreaseIndentPattern: /^\s*(<\/(?!html)[-_\.A-Za-z0-9]+\b[^>]*>|-->|\})/,
    },
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    onEnterRules: [
      {
        beforeText: new RegExp(
          `<(?!(?:${EMPTY_ELEMENTS.join(
            "|"
          )}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,
          "i"
        ),
        afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>/i,
        action: { indentAction: IndentAction.IndentOutdent },
      },
      {
        beforeText: new RegExp(
          `<(?!(?:${EMPTY_ELEMENTS.join(
            "|"
          )}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
          "i"
        ),
        action: { indentAction: IndentAction.Indent },
      },
    ],
  });
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
