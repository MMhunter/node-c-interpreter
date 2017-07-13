import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class BlockItem implements IProductionRule {

    public readonly name = "block_item";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
