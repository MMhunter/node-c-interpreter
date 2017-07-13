import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class InitializerList implements IProductionRule {

    public readonly name = "initializer_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
