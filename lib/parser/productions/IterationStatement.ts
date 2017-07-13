import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class IterationStatement implements IProductionRule {

    public readonly name = "iteration_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
