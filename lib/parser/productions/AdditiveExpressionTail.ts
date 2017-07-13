import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class AdditiveExpressionTail implements IProductionRule {

    public readonly name = "additive_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
