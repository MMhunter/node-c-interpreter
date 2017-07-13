import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ExpressionTail implements IProductionRule {

    public readonly name = "expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
