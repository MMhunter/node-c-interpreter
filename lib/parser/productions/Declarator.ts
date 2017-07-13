import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class Declarator implements IProductionRule {

    public readonly name = "declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
