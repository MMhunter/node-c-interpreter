/**
 * rule:
 * type_qualifier
 *     CONST
 *     RESTRICT
 *     VOLATILE
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class TypeQualifier implements IProductionRule {

    public static readonly firstSet = [TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE];

    public readonly name = "type_qualifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
