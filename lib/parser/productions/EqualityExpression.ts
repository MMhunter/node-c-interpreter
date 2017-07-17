/**
 * rule:
 * equality_expression
 *     <relational_expression> <equality_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {RelationalExpression} from "./RelationalExpression";
import {EqualityExpressionTail} from "./EqualityExpressionTail";

export class EqualityExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "equality_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return check_rules([new RelationalExpression(), new EqualityExpressionTail()], tokenStream, this);
    }

}
