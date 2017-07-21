/**
 * rule:
 * multiplicative_expression
 *     <cast_expression> <multiplicative_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {CastExpression} from "./CastExpression";
import {MultiplicativeExpressionTail} from "./MultiplicativeExpressionTail";

export class MultiplicativeExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "multiplicative_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new CastExpression(), new MultiplicativeExpressionTail()], tokenStream, this, parent);
    }

}
