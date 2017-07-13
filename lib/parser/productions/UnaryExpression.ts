import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class UnaryExpression implements IProductionRule {

    public readonly name = "unary_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
