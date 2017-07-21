/**
 * rule:
 * and_expression
 *     <equality_expression> <and_expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {EqualityExpression} from "./EqualityExpression";
import {AndExpressionTail} from "./AndExpressionTail";

export class AndExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "and_expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(EqualityExpression.firstSet)){
           return check_rules([new EqualityExpression(), new AndExpressionTail()], tokenStream, this, parent);
        }
        return null;
    }

}
