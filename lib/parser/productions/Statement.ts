import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class Statement implements IProductionRule {

    public readonly name = "statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
