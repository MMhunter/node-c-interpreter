import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DeclarationSpecifiers implements IProductionRule {

    public readonly name = "declaration_specifiers";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
