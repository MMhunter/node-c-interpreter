/**
 * rule:
 * postfix_expression
 *     <primary_expression> <postfix_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {PrimaryExpression} from "./PrimaryExpression";
import {PostfixExpressionTail} from "./PostfixExpressionTail";

export class PostfixExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "("];

    public readonly name = "postfix_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new PrimaryExpression(), new PostfixExpressionTail()], tokenStream, this, parent);
    }

}
