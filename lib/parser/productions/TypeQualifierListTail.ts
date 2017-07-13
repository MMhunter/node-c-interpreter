import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class TypeQualifierListTail implements IProductionRule {

    public readonly name = "type_qualifier_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
