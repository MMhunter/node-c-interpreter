/**
 * rule:
 * external_declaration
 *     <function_definition>
 *     <declaration>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {FunctionDefinition} from "./FunctionDefinition";
import {Declaration} from "./Declaration";

export class ExternalDeclaration implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "external_declaration";

    public apply(tokenStream: TokenStream): ASTNode {

        return check_rules([new FunctionDefinition()], tokenStream, this) || check_rules([new Declaration()], tokenStream, this);
    }

}
