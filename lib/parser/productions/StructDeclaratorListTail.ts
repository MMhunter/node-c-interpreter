/**
 * rule:
 * struct_declarator_list_tail
 *     , <struct_declarator> <struct_declarator_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class StructDeclaratorListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "struct_declarator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
