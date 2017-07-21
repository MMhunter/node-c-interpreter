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
import {Expression} from "./Expression";

export class JumpStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.GOTO, TokenType.CONTINUE, TokenType.BREAK, TokenType.RETURN];

    public readonly name = "jump_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.lookAhead()){
            switch (tokenStream.lookAhead().type) {
                case TokenType.GOTO:
                    return check_rules([TokenType.GOTO, TokenType.IDENTIFIER, ";"], tokenStream, this, parent);
                case TokenType.CONTINUE:
                    return check_rules([TokenType.CONTINUE, ";"], tokenStream, this, parent);
                case TokenType.BREAK:
                    return check_rules([TokenType.BREAK, ";"], tokenStream, this, parent);
                case TokenType.RETURN:
                    return check_rules([TokenType.RETURN, ";"] , tokenStream, this, parent) || check_rules([TokenType.RETURN, new Expression(), ";"], tokenStream, this, parent);
            }
        }
        return null;
    }

}
