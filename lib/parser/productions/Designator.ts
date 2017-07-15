/**
 * rule:
 * designator
 *     [ <constant_expression> ]
 *     . IDENTIFIER
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class Designator implements IProductionRule {

    public static readonly firstSet = ["[", "."];

    public readonly name = "designator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
