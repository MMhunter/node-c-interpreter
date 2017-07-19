/**
 * rule:
 * parameter_declaration
 *     <declaration_specifiers> <declarator>
 *     <declaration_specifiers> <abstract_declarator>
 *     <declaration_specifiers>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {DeclarationSpecifiers} from "./DeclarationSpecifiers";
import {Declarator} from "./Declarator";
import {AbstractDeclarator} from "./AbstractDeclarator";

export class ParameterDeclaration implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "parameter_declaration";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new DeclarationSpecifiers(), new Declarator()], tokenStream, this, parent)
            || check_rules([new DeclarationSpecifiers(), new AbstractDeclarator()], tokenStream, this, parent)
            || check_rules([new DeclarationSpecifiers()], tokenStream, this, parent);
    }

}
