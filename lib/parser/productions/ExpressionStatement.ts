/**
 * rule:
 * expression_statement
 *     ;
 *     <expression> ;
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Expression} from "./Expression";

export class ExpressionStatement implements IProductionRule {

    public static readonly firstSet = [";", TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "expression_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst(";")){
            return check_rules([";"], tokenStream, this);
        }
        else if (tokenStream.checkFirst(Expression.firstSet)){
            return check_rules([new Expression(), ";"], tokenStream, this);
        }
        return null;
    }

}
