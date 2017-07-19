/**
 * rule:
 * translation_unit
 *     <external_declaration> <translation_unit_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ExternalDeclaration} from "./ExternalDeclaration";
import {TranslationUnitTail} from "./TranslationUnitTail";

export class TranslationUnit implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "translation_unit";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new ExternalDeclaration(), new TranslationUnitTail()], tokenStream, this, parent);
    }

}
