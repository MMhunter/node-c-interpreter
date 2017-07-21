/**
 * rule:
 * argument_expression_list_tail
 *     , <assignment_expression> <argument_expression_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AssignmentExpression} from "./AssignmentExpression";

export class ArgumentExpressionListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "argument_expression_list_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(",")){
            return check_rules([",", new AssignmentExpression(), new ArgumentExpressionListTail()], tokenStream, this, parent);
        }
        else {
            return check_rules([], tokenStream, this, parent);
        }
    }

}
