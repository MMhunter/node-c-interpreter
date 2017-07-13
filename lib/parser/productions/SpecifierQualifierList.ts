import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class SpecifierQualifierList implements IProductionRule {

    public readonly name = "specifier_qualifier_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
