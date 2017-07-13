import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class StorageClassSpecifier implements IProductionRule {

    public readonly name = "storage_class_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
