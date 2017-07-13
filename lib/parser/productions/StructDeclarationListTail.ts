import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StructDeclarationListTail implements IProductionRule {

    public readonly name = "struct_declaration_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
