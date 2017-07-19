/**
 * rule:
 * logical_and_expression
 *     <inclusive_or_expression> <logical_and_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {InclusiveOrExpression} from "./InclusiveOrExpression";
import {LogicalAndExpressionTail} from "./LogicalAndExpressionTail";

export class LogicalAndExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "logical_and_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new InclusiveOrExpression(), new LogicalAndExpressionTail()], tokenStream, this, parent);
    }

}
