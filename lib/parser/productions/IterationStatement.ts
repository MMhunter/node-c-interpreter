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
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Expression} from "./Expression";
import {Statement} from "./Statement";
import {ExpressionStatement} from "./ExpressionStatement";
import {Declaration} from "./Declaration";

export class IterationStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.WHILE, TokenType.DO, TokenType.FOR];

    public readonly name = "iteration_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([TokenType.WHILE, "(", new Expression(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.DO, new Statement(), TokenType.WHILE, "(", new Expression(), ")", ";"], tokenStream, this, parent)
            || check_rules([TokenType.FOR, "(", new ExpressionStatement(), new ExpressionStatement(), new Expression(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.FOR, "(", new ExpressionStatement(), new ExpressionStatement(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.FOR, "(", new Declaration(), new ExpressionStatement(), new Expression(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.FOR, "(", new Declaration(), new ExpressionStatement(), ")", new Statement()], tokenStream, this, parent);
    }

}
