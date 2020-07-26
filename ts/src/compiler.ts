import ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

export function getAST(code: string) {
  return ts.createSourceFile(
    'random-filename',
    code,
    ts.ScriptTarget.ES2015,
    true
  );
}

export function getASTFromFile(filename: string) {
  const fullPath = path.join(__dirname, filename);
  if (fs.existsSync(fullPath)) {
    return getAST(fs.readFileSync(fullPath).toString());
  }

  throw `Could not find file ${fullPath}`;
}