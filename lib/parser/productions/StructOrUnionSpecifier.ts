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
import {StructOrUnion} from "./StructOrUnion";
import {StructDeclarationList} from "./StructDeclarationList";

export class StructOrUnionSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.STRUCT, TokenType.UNION];

    public readonly name = "struct_or_union_specifier";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new StructOrUnion(), TokenType.IDENTIFIER, "{", new StructDeclarationList(), "}"], tokenStream, this, parent) || check_rules([new StructOrUnion(), "{", new StructDeclarationList(), "}"], tokenStream, this, parent) || check_rules([new StructOrUnion(), TokenType.IDENTIFIER], tokenStream, this, parent);
    }

}
