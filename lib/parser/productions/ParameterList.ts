import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ParameterList implements IProductionRule {

    public readonly name = "parameter_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
