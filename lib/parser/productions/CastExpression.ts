import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class CastExpression implements IProductionRule {

    public readonly name = "cast_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
