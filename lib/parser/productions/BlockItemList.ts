import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class BlockItemList implements IProductionRule {

    public readonly name = "block_item_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
