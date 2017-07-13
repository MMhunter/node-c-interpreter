import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ExclusiveOrExpressionTail implements IProductionRule {

    public readonly name = "exclusive_or_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
