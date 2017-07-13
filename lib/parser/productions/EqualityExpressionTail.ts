import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class EqualityExpressionTail implements IProductionRule {

    public readonly name = "equality_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
