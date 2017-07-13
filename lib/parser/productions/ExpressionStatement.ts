import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ExpressionStatement implements IProductionRule {

    public readonly name = "expression_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
