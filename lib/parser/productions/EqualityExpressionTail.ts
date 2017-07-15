/**
 * rule:
 * equality_expression_tail
 *     EQ_OP <relational_expression> <equality_expression_tail>
 *     NE_OP <relational_expression> <equality_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class EqualityExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "equality_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
