import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StructDeclarationList implements IProductionRule {

    public readonly name = "struct_declaration_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
