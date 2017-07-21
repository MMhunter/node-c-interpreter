/**
 * rule:
 * relational_expression_tail
 *     < <shift_expression> <relational_expression_tail>
 *     > <shift_expression> <relational_expression_tail>
 *     LE_OP <shift_expression> <relational_expression_tail>
 *     GE_OP <shift_expression> <relational_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ShiftExpression} from "./ShiftExpression";

export class RelationalExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "relational_expression_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules(["<", new ShiftExpression(), new RelationalExpressionTail()], tokenStream, this, parent) || check_rules([">", new ShiftExpression(), new RelationalExpressionTail()], tokenStream, this, parent) || check_rules([TokenType.LE_OP, new ShiftExpression(), new RelationalExpressionTail()], tokenStream, this, parent) || check_rules([TokenType.GE_OP, new ShiftExpression(), new RelationalExpressionTail()], tokenStream, this, parent) || check_rules([], tokenStream, this, parent);
    }

}
