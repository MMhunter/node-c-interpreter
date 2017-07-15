/**
 * rule:
 * translation_unit_tail
 *     <external_declaration> <translation_unit_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class TranslationUnitTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "translation_unit_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
