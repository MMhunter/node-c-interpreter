import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class InitDeclaratorList implements IProductionRule {

    public readonly name = "init_declarator_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
