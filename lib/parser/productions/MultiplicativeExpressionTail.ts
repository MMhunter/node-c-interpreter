/**
 * rule:
 * multiplicative_expression_tail
 *     * <cast_expression> <multiplicative_expression_tail>
 *     / <cast_expression> <multiplicative_expression_tail>
 *     % <cast_expression> <multiplicative_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class MultiplicativeExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "multiplicative_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
