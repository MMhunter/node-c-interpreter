/**
 * rule:
 * declaration_specifiers
 *     <storage_class_specifier>
 *     <storage_class_specifier> <declaration_specifiers>
 *     <type_specifier>
 *     <type_specifier> <declaration_specifiers>
 *     <type_qualifier>
 *     <type_qualifier> <declaration_specifiers>
 *     <function_specifier>
 *     <function_specifier> <declaration_specifiers>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class DeclarationSpecifiers implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "declaration_specifiers";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
