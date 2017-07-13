import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class FunctionSpecifier implements IProductionRule {

    public readonly name = "function_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
