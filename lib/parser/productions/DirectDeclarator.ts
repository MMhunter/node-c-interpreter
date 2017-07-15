/**
 * rule:
 * direct_declarator
 *     IDENTIFIER <direct_declarator_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class DirectDeclarator implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER];

    public readonly name = "direct_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
