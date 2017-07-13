import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class LabeledStatement implements IProductionRule {

    public readonly name = "labeled_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
