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
import {Expression} from "./Expression";
import {Statement} from "./Statement";

export class SelectionStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.IF, TokenType.SWITCH];

    public readonly name = "selection_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([TokenType.IF, "(", new Expression(), ")", new Statement(), TokenType.ELSE, new Statement()], tokenStream, this, parent)
            ||   check_rules([TokenType.IF, "(", new Expression(), ")", new Statement()], tokenStream, this, parent)
            || check_rules([TokenType.SWITCH, "(", new Expression(), ")", new Statement()], tokenStream, this, parent);
    }

}
