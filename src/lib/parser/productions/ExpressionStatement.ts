/**
 * rule:
 * expression_statement
 *     ;
 *     <expression> ;
 */
import {ASTNode, check_rules, NonTerminal, ParsedToken, ParsingErrorTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {Token, TokenType} from "../../lexer/Lexer";
import {Expression} from "./Expression";

export class ExpressionStatement implements IProductionRule {

    public static readonly firstSet = [";", TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "expression_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (!tokenStream.checkFirst(";") && tokenStream.checkFirst(Expression.firstSet)){
            let result = check_rules([new Expression()], tokenStream, this, parent);
            if (result) {
                if (tokenStream.checkFirst(";")) {
                    result.addChild(new Terminal(tokenStream.nextToken()));
                }
                else if (tokenStream.lookAhead() && tokenStream.lookAhead().line !== tokenStream.currentToken().line){
                    let fakeToken = new ParsedToken(new Token(";", ";", tokenStream.currentToken().line, tokenStream.currentToken().offset + tokenStream.currentToken().text.length));
                    let error = new ParsingErrorTerminal([fakeToken]);
                    error.expected = true;
                    result.addChild(error);
                }
            }
            return result;
        }
        else{
            if (tokenStream.checkFirst(";")){
                return check_rules([";"], tokenStream, this, parent);
            }
            else {
                return null;
            }
        }
    }

}
