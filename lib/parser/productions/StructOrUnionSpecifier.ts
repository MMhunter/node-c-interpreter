import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StructOrUnionSpecifier implements IProductionRule {

    public readonly name = "struct_or_union_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
