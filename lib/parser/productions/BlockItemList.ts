/**
 * rule:
 * block_item_list
 *     <block_item> <block_item_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {BlockItem} from "./BlockItem";
import {BlockItemListTail} from "./BlockItemListTail";

export class BlockItemList implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE, TokenType.IDENTIFIER, TokenType.CASE, TokenType.DEFAULT, "{", ";", TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF, TokenType.IF, TokenType.SWITCH, TokenType.WHILE, TokenType.DO, TokenType.FOR, TokenType.GOTO, TokenType.CONTINUE, TokenType.BREAK, TokenType.RETURN];

    public readonly name = "block_item_list";

    public apply(tokenStream: TokenStream): ASTNode {

        if (tokenStream.checkFirst(BlockItem.firstSet)){
            return check_rules([new BlockItem(), new BlockItemListTail()], tokenStream, this);
        }
        return null;
    }

}
