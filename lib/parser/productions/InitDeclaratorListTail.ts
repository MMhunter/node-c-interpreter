import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class InitDeclaratorListTail implements IProductionRule {

    public readonly name = "init_declarator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
