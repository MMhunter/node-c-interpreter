import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ConstantExpression implements IProductionRule {

    public readonly name = "constant_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
