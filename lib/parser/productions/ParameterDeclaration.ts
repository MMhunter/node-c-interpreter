import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ParameterDeclaration implements IProductionRule {

    public readonly name = "parameter_declaration";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
