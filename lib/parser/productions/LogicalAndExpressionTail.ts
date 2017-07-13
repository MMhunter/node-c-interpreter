import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class LogicalAndExpressionTail implements IProductionRule {

    public readonly name = "logical_and_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
