import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StructDeclaratorListTail implements IProductionRule {

    public readonly name = "struct_declarator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
