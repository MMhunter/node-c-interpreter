/**
 * rule:
 * init_declarator_list_tail
 *     , <init_declarator> <init_declarator_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class InitDeclaratorListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "init_declarator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
