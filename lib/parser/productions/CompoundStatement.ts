/**
 * rule:
 * compound_statement
 *     { }
 *     { <block_item_list> }
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class CompoundStatement implements IProductionRule {

    public static readonly firstSet = ["{"];

    public readonly name = "compound_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
