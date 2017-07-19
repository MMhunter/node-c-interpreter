/**
 * rule:
 * additive_expression
 *     <multiplicative_expression> <additive_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {MultiplicativeExpression} from "./MultiplicativeExpression";
import {AdditiveExpressionTail} from "./AdditiveExpressionTail";

export class AdditiveExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "additive_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(MultiplicativeExpression.firstSet)){
            return check_rules([new MultiplicativeExpression(), new AdditiveExpressionTail()], tokenStream, this, parent);
        }
        return null;
    }

}
