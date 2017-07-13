import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StructDeclarator implements IProductionRule {

    public readonly name = "struct_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
