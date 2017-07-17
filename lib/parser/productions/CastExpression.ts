/**
 * rule:
 * cast_expression
 *     <unary_expression>
 *     ( <type_name> ) <cast_expression>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {TypeName} from "./TypeName";
import {UnaryExpression} from "./UnaryExpression";

export class CastExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "cast_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        if ( tokenStream.checkFirst("(")){
           return check_rules(["(", new TypeName(), ")", new CastExpression()], tokenStream, this)
            || check_rules([new UnaryExpression()], tokenStream, this);
        }
        else if (tokenStream.checkFirst(UnaryExpression.firstSet)){
            return check_rules([new UnaryExpression()], tokenStream, this);
        }
        return null;
    }

}
