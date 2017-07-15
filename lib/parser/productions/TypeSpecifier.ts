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

export class TypeSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME];

    public readonly name = "type_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
