/**
 * rule:
 * struct_declarator_list
 *     <struct_declarator> <struct_declarator_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class StructDeclaratorList implements IProductionRule {

    public static readonly firstSet = ["*", TokenType.IDENTIFIER, ":"];

    public readonly name = "struct_declarator_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
