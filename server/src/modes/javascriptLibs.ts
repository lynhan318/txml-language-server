/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { join, basename, dirname } from "path";
import { readFileSync } from "fs";

const contents: { [name: string]: string } = {};

const serverFolder =
  basename(__dirname) === "dist"
    ? dirname(__dirname)
    : dirname(dirname(__dirname));
const TYPESCRIPT_LIB_SOURCE = join(
  serverFolder,
  "../node_modules/typescript/lib"
);
console.log("TypescriptLIBSource", TYPESCRIPT_LIB_SOURCE);
console.log("serverFolder", serverFolder);
export function loadLibrary(name: string) {
  let content = contents[name];
  if (typeof content !== "string") {
    let libPath = join(TYPESCRIPT_LIB_SOURCE, name); // from source
    try {
      content = readFileSync(libPath).toString();
    } catch (e) {
      console.log(`Unable to load library ${name} at ${libPath}: ${e.message}`);
      content = "";
    }
    contents[name] = content;
  }
  return content;
}
