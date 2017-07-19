/**
 * rule:
 * expression_tail
 *     , <assignment_expression> <expression_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AssignmentExpression} from "./AssignmentExpression";

export class ExpressionTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "expression_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(",")){
            return check_rules([",", new AssignmentExpression(), new ExpressionTail()], tokenStream, this, parent);
        }
        else{
            return check_rules([], tokenStream, this, parent);
        }
    }

}
