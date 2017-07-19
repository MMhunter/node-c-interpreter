/**
 * rule:
 * logical_or_expression_tail
 *     OR_OP <logical_and_expression> <logical_or_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {LogicalAndExpression} from "./LogicalAndExpression";

export class LogicalOrExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "logical_or_expression_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([TokenType.OR_OP, new LogicalAndExpression(), new LogicalOrExpressionTail()], tokenStream, this, parent) || check_rules([], tokenStream, this, parent);
    }

}
