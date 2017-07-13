import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DirectAbstractDeclarator implements IProductionRule {

    public readonly name = "direct_abstract_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
