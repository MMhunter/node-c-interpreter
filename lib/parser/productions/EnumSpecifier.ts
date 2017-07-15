/**
 * rule:
 * enum_specifier
 *     ENUM { <enumerator_list> }
 *     ENUM IDENTIFIER { <enumerator_list> }
 *     ENUM { <enumerator_list> , }
 *     ENUM IDENTIFIER { <enumerator_list> , }
 *     ENUM IDENTIFIER
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class EnumSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.ENUM];

    public readonly name = "enum_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
