/**
 * rule:
 * translation_unit_tail
 *     <external_declaration> <translation_unit_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ExternalDeclaration} from "./ExternalDeclaration";

export class TranslationUnitTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "translation_unit_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new ExternalDeclaration(), new TranslationUnitTail()], tokenStream, this, parent) || check_rules([], tokenStream, this, parent);
    }

}
