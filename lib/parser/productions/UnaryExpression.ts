/**
 * rule:
 * unary_expression
 *     <postfix_expression>
 *     INC_OP <unary_expression>
 *     DEC_OP <unary_expression>
 *     <unary_operator> <cast_expression>
 *     SIZEOF <unary_expression>
 *     SIZEOF ( <type_name> )
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {PostfixExpression} from "./PostfixExpression";
import {UnaryOperator} from "./UnaryOperator";
import {CastExpression} from "./CastExpression";
import {TypeName} from "./TypeName";

export class UnaryExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "unary_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new PostfixExpression()], tokenStream, this, parent) || check_rules([TokenType.INC_OP, new UnaryExpression()], tokenStream, this, parent) || check_rules([TokenType.DEC_OP, new UnaryExpression()], tokenStream, this, parent) || check_rules([new UnaryOperator(), new CastExpression()], tokenStream, this, parent) || check_rules([TokenType.SIZEOF, new UnaryExpression()], tokenStream, this, parent) || check_rules([TokenType.SIZEOF, "(", new TypeName(), ")"], tokenStream, this, parent);
    }

}
