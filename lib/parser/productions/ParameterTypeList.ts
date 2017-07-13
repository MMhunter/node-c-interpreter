import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ParameterTypeList implements IProductionRule {

    public readonly name = "parameter_type_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
