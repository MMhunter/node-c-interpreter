/**
 * rule:
 * enumerator_list_tail
 *     , <enumerator> <enumerator_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class EnumeratorListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "enumerator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
