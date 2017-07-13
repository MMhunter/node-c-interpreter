import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DirectDeclaratorTail implements IProductionRule {

    public readonly name = "direct_declarator_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
