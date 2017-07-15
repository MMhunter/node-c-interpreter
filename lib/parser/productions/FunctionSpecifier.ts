/**
 * rule:
 * function_specifier
 *     INLINE
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class FunctionSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.INLINE];

    public readonly name = "function_specifier";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
