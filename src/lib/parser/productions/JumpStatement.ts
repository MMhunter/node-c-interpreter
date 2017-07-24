/**
 * rule:
 * jump_statement
 *     GOTO IDENTIFIER ;
 *     CONTINUE ;
 *     BREAK ;
 *     RETURN ;
 *     RETURN <expression> ;
 */
import {ASTNode, check_rules, NonTerminal, ParsedToken, ParsingErrorTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {Token, TokenType} from "../../lexer/Lexer";
import {Expression} from "./Expression";

export class JumpStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.GOTO, TokenType.CONTINUE, TokenType.BREAK, TokenType.RETURN];

    public readonly name = "jump_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        let result: NonTerminal;
        if (tokenStream.checkFirst(JumpStatement.firstSet)){
            switch (tokenStream.lookAhead().type) {
                case TokenType.GOTO:
                    result =  check_rules([TokenType.GOTO, TokenType.IDENTIFIER], tokenStream, this, parent);
                    break;
                case TokenType.CONTINUE:
                    result = check_rules([TokenType.CONTINUE], tokenStream, this, parent);
                    break;
                case TokenType.BREAK:
                    result = check_rules([TokenType.BREAK], tokenStream, this, parent);
                    break;
                case TokenType.RETURN:
                    result = check_rules([TokenType.RETURN] , tokenStream, this, parent) || check_rules([TokenType.RETURN, new Expression()], tokenStream, this, parent);
                    break;
            }
            if (!result){
                return null;
            }
            else{
                if (tokenStream.checkFirst(";")){
                    result.addChild(new Terminal(tokenStream.nextToken()));
                }
                else{
                    let fakeToken = new ParsedToken(new Token(";", ";", tokenStream.currentToken().line, tokenStream.currentToken().offset + tokenStream.currentToken().text.length));
                    let error = new ParsingErrorTerminal([fakeToken]);
                    error.expected = true;
                    result.addChild(error);
                }
                return result;
            }
        }
        return null;
    }

}
