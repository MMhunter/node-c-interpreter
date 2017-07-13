import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class CompoundStatement implements IProductionRule {

    public readonly name = "compound_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
