/**
 * rule:
 * shift_expression_tail
 *     LEFT_OP <additive_expression> <shift_expression_tail>
 *     RIGHT_OP <additive_expression> <shift_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class ShiftExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "shift_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
