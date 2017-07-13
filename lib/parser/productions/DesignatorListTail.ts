import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DesignatorListTail implements IProductionRule {

    public readonly name = "designator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
