import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ConditionalExpression implements IProductionRule {

    public readonly name = "conditional_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
