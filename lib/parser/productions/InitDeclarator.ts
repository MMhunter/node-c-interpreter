import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class InitDeclarator implements IProductionRule {

    public readonly name = "init_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
