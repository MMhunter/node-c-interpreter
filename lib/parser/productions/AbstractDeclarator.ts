import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class AbstractDeclarator implements IProductionRule {

    public readonly name = "abstract_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
