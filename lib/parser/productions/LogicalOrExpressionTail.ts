/**
 * rule:
 * logical_or_expression_tail
 *     OR_OP <logical_and_expression> <logical_or_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class LogicalOrExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "logical_or_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
