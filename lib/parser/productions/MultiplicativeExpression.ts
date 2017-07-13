import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class MultiplicativeExpression implements IProductionRule {

    public readonly name = "multiplicative_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
