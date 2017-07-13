import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class EqualityExpression implements IProductionRule {

    public readonly name = "equality_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
