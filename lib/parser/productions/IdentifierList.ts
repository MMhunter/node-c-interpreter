import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class IdentifierList implements IProductionRule {

    public readonly name = "identifier_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
