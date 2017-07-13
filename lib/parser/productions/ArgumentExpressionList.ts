import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ArgumentExpressionList implements IProductionRule {

    public readonly name = "argument_expression_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
