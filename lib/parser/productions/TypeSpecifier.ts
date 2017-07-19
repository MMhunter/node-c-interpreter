/**
 * rule:
 * type_specifier
 *     VOID
 *     CHAR
 *     SHORT
 *     INT
 *     LONG
 *     FLOAT
 *     DOUBLE
 *     SIGNED
 *     UNSIGNED
 *     BOOL
 *     COMPLEX
 *     IMAGINARY
 *     <struct_or_union_specifier>
 *     <enum_specifier>
 *     TYPE_NAME
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {EnumSpecifier} from "./EnumSpecifier";
import {StructOrUnionSpecifier} from "./StructOrUnionSpecifier";

export class TypeSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME];

    public readonly name = "type_specifier";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([TokenType.VOID], tokenStream, this, parent) || check_rules([TokenType.CHAR], tokenStream, this, parent) || check_rules([TokenType.SHORT], tokenStream, this, parent) || check_rules([TokenType.INT], tokenStream, this, parent) || check_rules([TokenType.LONG], tokenStream, this, parent) || check_rules([TokenType.FLOAT], tokenStream, this, parent) || check_rules([TokenType.DOUBLE], tokenStream, this, parent) || check_rules([TokenType.SIGNED], tokenStream, this, parent) || check_rules([TokenType.UNSIGNED], tokenStream, this, parent) || check_rules([TokenType.BOOL], tokenStream, this, parent) || check_rules([TokenType.COMPLEX], tokenStream, this, parent) || check_rules([TokenType.IMAGINARY], tokenStream, this, parent) || check_rules([new StructOrUnionSpecifier()], tokenStream, this, parent) || check_rules([new EnumSpecifier()], tokenStream, this, parent) || check_rules([TokenType.TYPE_NAME], tokenStream, this, parent);
    }

}
