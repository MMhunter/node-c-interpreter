/**
 * rule:
 * exclusive_or_expression
 *     <and_expression> <exclusive_or_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AndExpression} from "./AndExpression";
import {ExclusiveOrExpressionTail} from "./ExclusiveOrExpressionTail";

export class ExclusiveOrExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "exclusive_or_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new AndExpression(), new ExclusiveOrExpressionTail()], tokenStream, this, parent);
    }

}
