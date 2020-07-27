import { isImportDeclaration, SourceFile, isStringLiteral, Node, isCallExpression, isExpressionStatement, Expression, TypeChecker, SymbolDisplayPartKind } from "typescript";

function isPiranhaImport(node: Node) {
  if (isImportDeclaration(node)) {
    const { moduleSpecifier } = node;
    if (!isStringLiteral(moduleSpecifier)) {
      return false;
    }
    if (moduleSpecifier.text === 'piranha-ts') {
      return true;
    }
  }
  for (const child of node.getChildren()) {
    if (isPiranhaImport(child)) {
      return true;
    }
  }
  return false;
}


export function importsPiranha(sourceFile: SourceFile) {
  return isPiranhaImport(sourceFile);
}

export interface PiranhaConfigStatement {
  type: 'always' | 'never',
  value: any
  expression: Expression
}

export function parsePiranhaConfigStatement(
  node: Node,
  typeChecker: TypeChecker,
): PiranhaConfigStatement | undefined {
  if (!isExpressionStatement(node)) {
    return undefined;
  }

  const { expression: call } = node;
  if (!isCallExpression(call)) {
    return undefined;
  }

  const symbol = typeChecker.getSymbolAtLocation(call.expression);
  console.log(symbol);
  return undefined;
}
