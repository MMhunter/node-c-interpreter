import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StructOrUnion implements IProductionRule {

    public readonly name = "struct_or_union";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
