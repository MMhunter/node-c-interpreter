import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class TypeQualifierList implements IProductionRule {

    public readonly name = "type_qualifier_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
