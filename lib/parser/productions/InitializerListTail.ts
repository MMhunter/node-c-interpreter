/**
 * rule:
 * initializer_list_tail
 *     , <initializer> <initializer_list_tail>
 *     , <designation> <initializer> <initializer_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class InitializerListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "initializer_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
