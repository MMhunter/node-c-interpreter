/**
 * rule:
 * and_expression_tail
 *     & <equality_expression> <and_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class AndExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "and_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
