/**
 * rule:
 * struct_declaration_list_tail
 *     <struct_declaration> <struct_declaration_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class StructDeclarationListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "struct_declaration_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
