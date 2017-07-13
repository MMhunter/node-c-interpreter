import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class RelationalExpression implements IProductionRule {

    public readonly name = "relational_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
