/**
 * rule:
 * designation
 *     <designator_list> =
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class Designation implements IProductionRule {

    public static readonly firstSet = ["[", "."];

    public readonly name = "designation";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
