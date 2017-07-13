import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class FunctionDefinition implements IProductionRule {

    public readonly name = "function_definition";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
