/**
 * rule:
 * init_declarator
 *     <declarator>
 *     <declarator> = <initializer>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class InitDeclarator implements IProductionRule {

    public static readonly firstSet = ["*", TokenType.IDENTIFIER];

    public readonly name = "init_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
