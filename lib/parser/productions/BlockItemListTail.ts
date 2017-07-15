/**
 * rule:
 * block_item_list_tail
 *     <block_item> <block_item_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class BlockItemListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "block_item_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
