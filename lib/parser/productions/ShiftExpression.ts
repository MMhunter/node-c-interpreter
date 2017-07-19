/**
 * rule:
 * shift_expression
 *     <additive_expression> <shift_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AdditiveExpression} from "./AdditiveExpression";
import {ShiftExpressionTail} from "./ShiftExpressionTail";

export class ShiftExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "shift_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new AdditiveExpression(), new ShiftExpressionTail()], tokenStream, this, parent);
    }

}
