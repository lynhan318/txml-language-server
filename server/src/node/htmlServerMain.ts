/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createConnection, Connection } from "vscode-languageserver/node";
import { formatError } from "../utils/runner";
import { startServer } from "../htmlServer";
import { getNodeFSRequestService } from "./nodeFs";

// Create a connection for the server.
const connection: Connection = createConnection();

process.on("unhandledRejection", (e: any) => {
  connection.console.error(formatError(`Unhandled exception`, e));
});

startServer(connection, { file: getNodeFSRequestService() });
