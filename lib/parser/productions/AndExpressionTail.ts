/**
 * rule:
 * and_expression_tail
 *     & <equality_expression> <and_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {EqualityExpression} from "./EqualityExpression";

export class AndExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "and_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst("&")){
           return check_rules(["&", new EqualityExpression(), new AndExpressionTail()], tokenStream, this);
        }
        else{
           return check_rules([], tokenStream, this);
        }
    }

}
