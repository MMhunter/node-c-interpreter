/**
 * rule:
 * logical_or_expression
 *     <logical_and_expression> <logical_or_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {LogicalAndExpression} from "./LogicalAndExpression";
import {LogicalOrExpressionTail} from "./LogicalOrExpressionTail";

export class LogicalOrExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "logical_or_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new LogicalAndExpression(), new LogicalOrExpressionTail()], tokenStream, this, parent);
    }

}
