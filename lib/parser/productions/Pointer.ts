import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class Pointer implements IProductionRule {

    public readonly name = "pointer";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
