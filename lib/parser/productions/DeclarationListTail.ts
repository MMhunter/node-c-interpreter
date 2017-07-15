/**
 * rule:
 * declaration_list_tail
 *     <declaration> <declaration_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class DeclarationListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "declaration_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
