/**
 * rule:
 * jump_statement
 *     GOTO IDENTIFIER ;
 *     CONTINUE ;
 *     BREAK ;
 *     RETURN ;
 *     RETURN <expression> ;
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class JumpStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.GOTO, TokenType.CONTINUE, TokenType.BREAK, TokenType.RETURN];

    public readonly name = "jump_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
