/**
 * rule:
 * inclusive_or_expression_tail
 *     | <exclusive_or_expression> <inclusive_or_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ExclusiveOrExpression} from "./ExclusiveOrExpression";

export class InclusiveOrExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "inclusive_or_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst("|")){
            return check_rules(["|", new ExclusiveOrExpression(), new InclusiveOrExpressionTail()], tokenStream, this);
        }
        return check_rules([], tokenStream, this);
    }

}
