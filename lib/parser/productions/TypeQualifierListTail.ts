/**
 * rule:
 * type_qualifier_list_tail
 *     <type_qualifier> <type_qualifier_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class TypeQualifierListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "type_qualifier_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
