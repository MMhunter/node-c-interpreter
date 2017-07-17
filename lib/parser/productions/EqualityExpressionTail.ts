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
import {RelationalExpression} from "./RelationalExpression";

export class EqualityExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "equality_expression_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst(TokenType.EQ_OP)){
            return check_rules([TokenType.EQ_OP, new RelationalExpression(), new EqualityExpressionTail()], tokenStream, this);
        }
        else if (tokenStream.checkFirst(TokenType.NE_OP)){
            return check_rules([TokenType.NE_OP, new RelationalExpression(), new EqualityExpressionTail()], tokenStream, this);
        }
        else{
            return check_rules([], tokenStream, this);
        }
    }

}
