/**
 * rule:
 * identifier_list
 *     IDENTIFIER <identifier_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class IdentifierList implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER];

    public readonly name = "identifier_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
