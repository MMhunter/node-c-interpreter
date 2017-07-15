/**
 * rule:
 * inclusive_or_expression_tail
 *     | <exclusive_or_expression> <inclusive_or_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class InclusiveOrExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "inclusive_or_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
