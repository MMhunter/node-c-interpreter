import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ParameterListTail implements IProductionRule {

    public readonly name = "parameter_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
