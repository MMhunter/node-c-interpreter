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

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([TokenType.TYPEDEF], tokenStream, this, parent)
            || check_rules([TokenType.EXTERN], tokenStream, this, parent)
            || check_rules([TokenType.STATIC], tokenStream, this, parent)
            || check_rules([TokenType.AUTO], tokenStream, this, parent)
            || check_rules([TokenType.REGISTER], tokenStream, this, parent);
    }

}
