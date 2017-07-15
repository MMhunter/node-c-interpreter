/**
 * rule:
 * pointer
 *     *
 *     * <type_qualifier_list>
 *     * <pointer>
 *     * <type_qualifier_list> <pointer>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class Pointer implements IProductionRule {

    public static readonly firstSet = ["*"];

    public readonly name = "pointer";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
