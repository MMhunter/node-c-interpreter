import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class TypeQualifier implements IProductionRule {

    public readonly name = "type_qualifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
