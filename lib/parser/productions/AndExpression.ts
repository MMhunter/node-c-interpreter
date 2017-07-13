import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class AndExpression implements IProductionRule {

    public readonly name = "and_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
