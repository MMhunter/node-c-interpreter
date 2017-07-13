import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ShiftExpressionTail implements IProductionRule {

    public readonly name = "shift_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
