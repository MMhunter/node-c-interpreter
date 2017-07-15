/**
 * rule:
 * selection_statement
 *     IF ( <expression> ) <statement>
 *     IF ( <expression> ) <statement> ELSE <statement>
 *     SWITCH ( <expression> ) <statement>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class SelectionStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.IF, TokenType.SWITCH];

    public readonly name = "selection_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
