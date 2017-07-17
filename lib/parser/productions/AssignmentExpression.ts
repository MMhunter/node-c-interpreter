/**
 * rule:
 * assignment_expression
 *     <conditional_expression>
 *     <unary_expression> <assignment_operator> <assignment_expression>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ConditionalExpression} from "./ConditionalExpression";
import {UnaryExpression} from "./UnaryExpression";
import {AssignmentOperator} from "./AssignmentOperator";

export class AssignmentExpression implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "assignment_expression";

    public apply(tokenStream: TokenStream): ASTNode {

        return check_rules([new ConditionalExpression()], tokenStream, this )
            || check_rules([new UnaryExpression(), new AssignmentOperator(), new AssignmentExpression()], tokenStream, this);

    }

}
