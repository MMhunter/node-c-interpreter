import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class EnumSpecifier implements IProductionRule {

    public readonly name = "enum_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
