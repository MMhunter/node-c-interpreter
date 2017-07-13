import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DeclarationListTail implements IProductionRule {

    public readonly name = "declaration_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
