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

export class IterationStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.WHILE, TokenType.DO, TokenType.FOR];

    public readonly name = "iteration_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
