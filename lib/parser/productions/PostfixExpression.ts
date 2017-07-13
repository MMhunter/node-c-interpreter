import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class PostfixExpression implements IProductionRule {

    public readonly name = "postfix_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
