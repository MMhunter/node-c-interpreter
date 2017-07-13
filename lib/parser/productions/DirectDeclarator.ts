import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DirectDeclarator implements IProductionRule {

    public readonly name = "direct_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
