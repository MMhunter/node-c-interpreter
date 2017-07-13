import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class RelationalExpressionTail implements IProductionRule {

    public readonly name = "relational_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
