/**
 * rule:
 * iteration_statement
 *     WHILE ( <expression> ) <statement>
 *     DO <statement> WHILE ( <expression> ) ;
 *     FOR ( <expression_statement> <expression_statement> ) <statement>
 *     FOR ( <expression_statement> <expression_statement> <expression> ) <statement>
 *     FOR ( <declaration> <expression_statement> ) <statement>
 *     FOR ( <declaration> <expression_statement> <expression> ) <statement>
 */
import {ASTNode, check_rules, NonTerminal, ParsedToken, ParsingErrorTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {Token, TokenType} from "../../lexer/Lexer";
import {Expression} from "./Expression";
import {Statement} from "./Statement";
import {ExpressionStatement} from "./ExpressionStatement";
import {Declaration} from "./Declaration";

export class IterationStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.WHILE, TokenType.DO, TokenType.FOR];

    public readonly name = "iteration_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {

        let result =  check_rules([TokenType.DO, new Statement(), TokenType.WHILE, "(", new Expression(), ")"], tokenStream, this, parent);

        if (result){
            if (tokenStream.checkFirst(";")){
                result.addChild(new Terminal(tokenStream.nextToken()));
            }
            else if (tokenStream.lookAhead() && tokenStream.lookAhead().line !== tokenStream.currentToken().line){
                let fakeToken = new ParsedToken(new Token(";", ";", tokenStream.currentToken().line, tokenStream.currentToken().offset + tokenStream.currentToken().text.length));
                let error = new ParsingErrorTerminal([fakeToken]);
                error.expected = true;
                result.addChild(error);
            }
            return result;
        }

        return check_rules([TokenType.WHILE, "(", new Expression(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.FOR, "(", new ExpressionStatement(), new ExpressionStatement(), new Expression(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.FOR, "(", new ExpressionStatement(), new ExpressionStatement(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.FOR, "(", new Declaration(), new ExpressionStatement(), new Expression(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.FOR, "(", new Declaration(), new ExpressionStatement(), ")", new Statement()], tokenStream, this, parent);
    }

}
