import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class TypeName implements IProductionRule {

    public readonly name = "type_name";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
