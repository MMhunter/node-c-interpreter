/**
 * rule:
 * enumerator
 *     IDENTIFIER
 *     IDENTIFIER = <constant_expression>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class Enumerator implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER];

    public readonly name = "enumerator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
