/**
 * rule:
 * designator_list_tail
 *     <designator> <designator_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class DesignatorListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "designator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
