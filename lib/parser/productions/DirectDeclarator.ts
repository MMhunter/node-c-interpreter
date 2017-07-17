/**
 * rule:
 * direct_declarator
 *     IDENTIFIER <direct_declarator_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {DirectDeclaratorTail} from "./DirectDeclaratorTail";

export class DirectDeclarator implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER];

    public readonly name = "direct_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst(TokenType.IDENTIFIER)){
            return check_rules([TokenType.IDENTIFIER, new DirectDeclaratorTail()], tokenStream, this);
        }
        return null;
    }

}
