import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class TranslationUnitTail implements IProductionRule {

    public readonly name = "translation_unit_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
