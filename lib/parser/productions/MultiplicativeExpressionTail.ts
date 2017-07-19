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
import {CastExpression} from "./CastExpression";

export class MultiplicativeExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "multiplicative_expression_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules(["*", new CastExpression(), new MultiplicativeExpressionTail()], tokenStream, this, parent)
            || check_rules(["/", new CastExpression(), new MultiplicativeExpressionTail()], tokenStream, this, parent)
            || check_rules(["%", new CastExpression(), new MultiplicativeExpressionTail()], tokenStream, this, parent)
            || check_rules([], tokenStream, this, parent);
    }

}
