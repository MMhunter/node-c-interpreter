/**
 * rule:
 * exclusive_or_expression_tail
 *     ^ <and_expression> <exclusive_or_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AndExpression} from "./AndExpression";

export class ExclusiveOrExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "exclusive_or_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst("^")){
           return check_rules(["^", new AndExpression(), new ExclusiveOrExpressionTail()], tokenStream, this);
        }
        else{
            return check_rules([], tokenStream, this);
        }
    }

}
