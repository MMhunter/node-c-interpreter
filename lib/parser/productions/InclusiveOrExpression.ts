/**
 * rule:
 * inclusive_or_expression
 *     <exclusive_or_expression> <inclusive_or_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ExclusiveOrExpression} from "./ExclusiveOrExpression";
import {InclusiveOrExpressionTail} from "./InclusiveOrExpressionTail";

export class InclusiveOrExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "inclusive_or_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return check_rules([new ExclusiveOrExpression(), new InclusiveOrExpressionTail()], tokenStream, this);
    }

}
