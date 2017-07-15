/**
 * rule:
 * statement
 *     <labeled_statement>
 *     <compound_statement>
 *     <expression_statement>
 *     <selection_statement>
 *     <iteration_statement>
 *     <jump_statement>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class Statement implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CASE, TokenType.DEFAULT, "{", ";", TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF, TokenType.IF, TokenType.SWITCH, TokenType.WHILE, TokenType.DO, TokenType.FOR, TokenType.GOTO, TokenType.CONTINUE, TokenType.BREAK, TokenType.RETURN];

    public readonly name = "statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
