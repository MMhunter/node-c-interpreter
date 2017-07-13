import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StructDeclaratorList implements IProductionRule {

    public readonly name = "struct_declarator_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
