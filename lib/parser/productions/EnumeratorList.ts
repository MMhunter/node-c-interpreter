import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class EnumeratorList implements IProductionRule {

    public readonly name = "enumerator_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}