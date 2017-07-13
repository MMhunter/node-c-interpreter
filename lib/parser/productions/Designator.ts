import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class Designator implements IProductionRule {

    public readonly name = "designator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
