import * as ts from "typescript"
import { importsPiranha, parsePiranhaConfigStatement } from "./config";

function createCompiler(files: Record<string, string>) {
  const compilerHost: ts.CompilerHost = {
    fileExists: filePath => filePath in files,
    directoryExists: dirPath => dirPath === "/",
    getCurrentDirectory: () => "/",
    getDirectories: () => [],
    getCanonicalFileName: fileName => fileName,
    getNewLine: () => "\n",
    getDefaultLibFileName: () => "",
    getSourceFile: filePath => filePath in files
      ? ts.createSourceFile(filePath, files[filePath], ts.ScriptTarget.Latest)
      : undefined,
    readFile: filePath => files[filePath],
    useCaseSensitiveFileNames: () => true,
    writeFile: () => { }
  }
  return ts.createProgram()
}

describe('importsPiranha', () => {
  it('returns true if file imports piranha-ts', () => {
    const file = ts.createSourceFile(
      'test.ts',
      'import { always } from "piranha-ts"',
      ts.ScriptTarget.Latest
    );
    expect(importsPiranha(file)).toBe(true);
  });
});

describe('parsePiranhaConfigStatement', () => {
  it('returns always statement', () => {
    const file = ts.createSourceFile(
      'test.ts',
      `
import { always } from "piranha-ts";
const globalFlag = true;
always(true, () => globalFlag);
      `,
      ts.ScriptTarget.Latest
    );
    const program = ts.createProgram({
      options: { f }
    });
    program.

    const actual = parsePiranhaConfigStatement(file.statements[2]);
    expect(actual).toEqual({
      type: 'always',
      value: true,
      expression: ts.create
    })

  })
})