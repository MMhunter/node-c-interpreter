/**
 * rule:
 * direct_abstract_declarator
 *     ( <abstract_declarator> ) <direct_abstract_declarator_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AbstractDeclarator} from "./AbstractDeclarator";
import {DirectAbstractDeclaratorTail} from "./DirectAbstractDeclaratorTail";

export class DirectAbstractDeclarator implements IProductionRule {

    public static readonly firstSet = ["("];

    public readonly name = "direct_abstract_declarator";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst("(")){
            return check_rules(["(", new AbstractDeclarator, ")", new DirectAbstractDeclaratorTail()], tokenStream, this, parent);
        }
        return null;
    }

}
