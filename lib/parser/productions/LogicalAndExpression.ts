import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class LogicalAndExpression implements IProductionRule {

    public readonly name = "logical_and_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
