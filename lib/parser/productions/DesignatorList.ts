/**
 * rule:
 * designator_list
 *     <designator> <designator_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class DesignatorList implements IProductionRule {

    public static readonly firstSet = ["[", "."];

    public readonly name = "designator_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
