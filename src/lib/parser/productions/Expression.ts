/**
 * rule:
 * expression
 *     <assignment_expression> <expression_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AssignmentExpression} from "./AssignmentExpression";
import {ExpressionTail} from "./ExpressionTail";

export class Expression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "expression";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if ( tokenStream.checkFirst(AssignmentExpression.firstSet) ){
            return check_rules([new AssignmentExpression(), new ExpressionTail()], tokenStream, this, parent);
        }
        return null;
    }

}
