import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class TypeSpecifier implements IProductionRule {

    public readonly name = "type_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
