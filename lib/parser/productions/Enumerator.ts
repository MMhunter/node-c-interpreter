import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class Enumerator implements IProductionRule {

    public readonly name = "enumerator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
