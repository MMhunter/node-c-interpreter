/**
 * rule:
 * direct_abstract_declarator
 *     ( <abstract_declarator> ) <direct_abstract_declarator_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class DirectAbstractDeclarator implements IProductionRule {

    public static readonly firstSet = ["("];

    public readonly name = "direct_abstract_declarator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
