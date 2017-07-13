import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class InclusiveOrExpressionTail implements IProductionRule {

    public readonly name = "inclusive_or_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
