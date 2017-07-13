import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class AndExpressionTail implements IProductionRule {

    public readonly name = "and_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
