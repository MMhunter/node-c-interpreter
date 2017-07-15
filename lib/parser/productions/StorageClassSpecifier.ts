/**
 * rule:
 * storage_class_specifier
 *     TYPEDEF
 *     EXTERN
 *     STATIC
 *     AUTO
 *     REGISTER
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class StorageClassSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER];

    public readonly name = "storage_class_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
