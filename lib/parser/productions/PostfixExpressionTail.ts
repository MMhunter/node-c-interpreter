/**
 * rule:
 * postfix_expression_tail
 *     [ <expression> ] <postfix_expression_tail>
 *     ( ) <postfix_expression_tail>
 *     ( <argument_expression_list> ) <postfix_expression_tail>
 *     . IDENTIFIER <postfix_expression_tail>
 *     PTR_OP IDENTIFIER <postfix_expression_tail>
 *     INC_OP <postfix_expression_tail>
 *     DEC_OP <postfix_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class PostfixExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "postfix_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
