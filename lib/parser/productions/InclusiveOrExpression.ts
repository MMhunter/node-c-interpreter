import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class InclusiveOrExpression implements IProductionRule {

    public readonly name = "inclusive_or_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
