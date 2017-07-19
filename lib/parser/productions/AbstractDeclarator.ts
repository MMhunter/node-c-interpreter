/**
 * rule:
 * abstract_declarator
 *     <pointer>
 *     <direct_abstract_declarator>
 *     <pointer> <direct_abstract_declarator>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Pointer} from "./Pointer";
import {DirectAbstractDeclarator} from "./DirectAbstractDeclarator";

export class AbstractDeclarator implements IProductionRule {

    public static readonly firstSet = ["*", "("];

    public readonly name = "abstract_declarator";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {

        // Fistsets of Pointer nad DirectAbstractDeclarator has no intersection
        if ( tokenStream.checkFirst(Pointer.firstSet)){
            return check_rules([new Pointer(), new DirectAbstractDeclarator()], tokenStream, this, parent);
        }
        else if (tokenStream.checkFirst(DirectAbstractDeclarator.firstSet)){
            return check_rules([new DirectAbstractDeclarator()], tokenStream, this, parent);
        }

        return null;
    }

}
