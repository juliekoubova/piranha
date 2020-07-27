import * as ts from 'typescript';
import { readFileSync } from 'fs';

export const transformer: ts.TransformerFactory<ts.SourceFile> = context => {
    const visit: ts.Visitor = node => {
        console.log(node);
        return ts.visitEachChild(node, visit, context);
    }
    return node => ts.visitNode(node, visit)
}

export const clean = (filename: string) => {
    const file = ts.createSourceFile(
        filename,
        readFileSync(filename).toString(),
        ts.ScriptTarget.Latest
    )
    const result = ts.transform(file, [transformer]);
    const printer = ts.createPrinter();
    console.log(result);
    return printer.printFile(result.transformed[0])
}
