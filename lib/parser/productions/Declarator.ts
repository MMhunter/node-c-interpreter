/**
 * rule:
 * declarator
 *     <pointer> <direct_declarator>
 *     <direct_declarator>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class Declarator implements IProductionRule {

    public static readonly firstSet = ["*", TokenType.IDENTIFIER];

    public readonly name = "declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
