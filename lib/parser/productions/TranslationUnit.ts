import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class TranslationUnit implements IProductionRule {

    public readonly name = "translation_unit";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
