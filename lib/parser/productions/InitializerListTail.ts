import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class InitializerListTail implements IProductionRule {

    public readonly name = "initializer_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
