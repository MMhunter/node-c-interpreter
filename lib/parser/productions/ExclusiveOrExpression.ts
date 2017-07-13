import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ExclusiveOrExpression implements IProductionRule {

    public readonly name = "exclusive_or_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
