/**
 * rule:
 * unary_expression
 *     <postfix_expression>
 *     INC_OP <unary_expression>
 *     DEC_OP <unary_expression>
 *     <unary_operator> <cast_expression>
 *     SIZEOF <unary_expression>
 *     SIZEOF ( <type_name> )
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class UnaryExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "unary_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
