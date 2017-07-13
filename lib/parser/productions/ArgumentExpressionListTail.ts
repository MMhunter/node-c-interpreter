import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ArgumentExpressionListTail implements IProductionRule {

    public readonly name = "argument_expression_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
