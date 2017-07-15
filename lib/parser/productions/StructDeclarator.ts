/**
 * rule:
 * struct_declarator
 *     <declarator>
 *     : <constant_expression>
 *     <declarator> : <constant_expression>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class StructDeclarator implements IProductionRule {

    public static readonly firstSet = ["*", TokenType.IDENTIFIER, ":"];

    public readonly name = "struct_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
