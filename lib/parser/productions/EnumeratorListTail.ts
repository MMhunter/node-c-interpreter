import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class EnumeratorListTail implements IProductionRule {

    public readonly name = "enumerator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
