/**
 * rule:
 * logical_and_expression_tail
 *     AND_OP <inclusive_or_expression> <logical_and_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {InclusiveOrExpression} from "./InclusiveOrExpression";

export class LogicalAndExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "logical_and_expression_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([TokenType.AND_OP, new InclusiveOrExpression(), new LogicalAndExpressionTail()], tokenStream, this, parent)
            || check_rules([], tokenStream, this, parent);
    }

}
