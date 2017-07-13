import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class BlockItemListTail implements IProductionRule {

    public readonly name = "block_item_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
