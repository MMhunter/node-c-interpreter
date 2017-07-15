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

export class RelationalExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "relational_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
