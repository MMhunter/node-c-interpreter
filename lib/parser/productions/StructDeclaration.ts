import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StructDeclaration implements IProductionRule {

    public readonly name = "struct_declaration";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
