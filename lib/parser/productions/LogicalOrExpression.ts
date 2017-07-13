import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class LogicalOrExpression implements IProductionRule {

    public readonly name = "logical_or_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
