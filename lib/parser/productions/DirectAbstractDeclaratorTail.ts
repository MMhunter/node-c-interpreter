import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DirectAbstractDeclaratorTail implements IProductionRule {

    public readonly name = "direct_abstract_declarator_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
