import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ShiftExpression implements IProductionRule {

    public readonly name = "shift_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
