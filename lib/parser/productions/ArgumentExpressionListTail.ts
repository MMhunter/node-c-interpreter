/**
 * rule:
 * argument_expression_list_tail
 *     , <assignment_expression> <argument_expression_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class ArgumentExpressionListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "argument_expression_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
