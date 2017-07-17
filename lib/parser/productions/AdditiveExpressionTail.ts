/**
 * rule:
 * additive_expression_tail
 *     + <multiplicative_expression> <additive_expression_tail>
 *     - <multiplicative_expression> <additive_expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {MultiplicativeExpression} from "./MultiplicativeExpression";

export class AdditiveExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "additive_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {

        if (tokenStream.checkFirst("+")){
            return check_rules(["+", new MultiplicativeExpression(), new AdditiveExpressionTail()], tokenStream, this);
        }
        if (tokenStream.checkFirst("-")){
            return check_rules(["-", new MultiplicativeExpression(), new AdditiveExpressionTail()], tokenStream, this);
        }else{
            return check_rules([], tokenStream, this);
        }
    }

}
