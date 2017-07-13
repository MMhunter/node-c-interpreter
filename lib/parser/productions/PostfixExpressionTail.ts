import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class PostfixExpressionTail implements IProductionRule {

    public readonly name = "postfix_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
