/**
 * rule:
 * labeled_statement
 *     IDENTIFIER : <statement>
 *     CASE <constant_expression> : <statement>
 *     DEFAULT : <statement>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class LabeledStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CASE, TokenType.DEFAULT];

    public readonly name = "labeled_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
