import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class UnaryOperator implements IProductionRule {

    public readonly name = "unary_operator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
