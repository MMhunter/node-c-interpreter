import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class LogicalOrExpressionTail implements IProductionRule {

    public readonly name = "logical_or_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
