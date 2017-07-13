import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class AdditiveExpression implements IProductionRule {

    public readonly name = "additive_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
