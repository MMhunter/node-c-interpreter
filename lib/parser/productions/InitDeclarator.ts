/**
 * rule:
 * init_declarator
 *     <declarator>
 *     <declarator> = <initializer>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Initializer} from "./Initializer";
import {Declarator} from "./Declarator";

export class InitDeclarator implements IProductionRule {

    public static readonly firstSet = ["*", TokenType.IDENTIFIER];

    public readonly name = "init_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return check_rules([new Declarator(), "=", new Initializer()], tokenStream, this)
            || check_rules([new Declarator()], tokenStream, this);
    }

}
