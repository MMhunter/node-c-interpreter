/**
 * rule:
 * type_qualifier_list
 *     <type_qualifier> <type_qualifier_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class TypeQualifierList implements IProductionRule {

    public static readonly firstSet = [TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE];

    public readonly name = "type_qualifier_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
