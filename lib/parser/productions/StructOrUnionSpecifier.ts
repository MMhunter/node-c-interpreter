/**
 * rule:
 * struct_or_union_specifier
 *     <struct_or_union> IDENTIFIER { <struct_declaration_list> }
 *     <struct_or_union> { <struct_declaration_list> }
 *     <struct_or_union> IDENTIFIER
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class StructOrUnionSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.STRUCT, TokenType.UNION];

    public readonly name = "struct_or_union_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
