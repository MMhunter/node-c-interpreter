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
import {StorageClassSpecifier} from "./StorageClassSpecifier";
import {TypeQualifier} from "./TypeQualifier";
import {TypeSpecifier} from "./TypeSpecifier";
import {FunctionSpecifier} from "./FunctionSpecifier";

export class DeclarationSpecifiers implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "declaration_specifiers";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst(StorageClassSpecifier.firstSet)){
            return check_rules([new StorageClassSpecifier(), new DeclarationSpecifiers()], tokenStream, this)
                || check_rules([new StorageClassSpecifier()], tokenStream, this);
        }
        else if (tokenStream.checkFirst(TypeQualifier.firstSet)){
            return check_rules([new TypeQualifier(), new DeclarationSpecifiers()], tokenStream, this)
                || check_rules([new TypeQualifier()], tokenStream, this);
        }
        else if (tokenStream.checkFirst(TypeSpecifier.firstSet)){
            return check_rules([new TypeSpecifier(), new DeclarationSpecifiers()], tokenStream, this)
                || check_rules([new TypeSpecifier()], tokenStream, this);
        }
        else if (tokenStream.checkFirst(FunctionSpecifier.firstSet)){
            return check_rules([new FunctionSpecifier(), new DeclarationSpecifiers()], tokenStream, this)
                || check_rules([new FunctionSpecifier()], tokenStream, this);
        }
        return null;
    }

}
