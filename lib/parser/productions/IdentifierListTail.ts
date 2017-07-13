import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class IdentifierListTail implements IProductionRule {

    public readonly name = "identifier_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
