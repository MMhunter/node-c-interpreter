import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DeclarationList implements IProductionRule {

    public readonly name = "declaration_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
