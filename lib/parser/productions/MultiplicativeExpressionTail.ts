import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class MultiplicativeExpressionTail implements IProductionRule {

    public readonly name = "multiplicative_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
