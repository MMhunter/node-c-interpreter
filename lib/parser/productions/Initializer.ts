import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class Initializer implements IProductionRule {

    public readonly name = "initializer";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
