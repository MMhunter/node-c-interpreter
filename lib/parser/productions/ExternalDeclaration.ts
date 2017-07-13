import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class ExternalDeclaration implements IProductionRule {

    public readonly name = "external_declaration";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
