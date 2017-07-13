import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class SelectionStatement implements IProductionRule {

    public readonly name = "selection_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
