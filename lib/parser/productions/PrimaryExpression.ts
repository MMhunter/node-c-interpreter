/**
 * rule:
 * primary_expression
 *     IDENTIFIER
 *     CONSTANT
 *     STRING_LITERAL
 *     ( <expression> )
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Expression} from "./Expression";

export class PrimaryExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "("];

    public readonly name = "primary_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([TokenType.IDENTIFIER], tokenStream, this, parent)
            || check_rules([TokenType.CONSTANT], tokenStream, this, parent)
            || check_rules([TokenType.STRING_LITERAL], tokenStream, this, parent)
            || check_rules(["(", new Expression(), ")"], tokenStream, this, parent);
    }

}
