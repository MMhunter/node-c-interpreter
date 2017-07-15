/**
 * rule:
 * identifier_list_tail
 *     , IDENTIFIER <identifier_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class IdentifierListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "identifier_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
