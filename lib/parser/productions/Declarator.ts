/**
 * rule:
 * declarator
 *     <pointer> <direct_declarator>
 *     <direct_declarator>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Pointer} from "./Pointer";
import {DirectDeclarator} from "./DirectDeclarator";

export class Declarator implements IProductionRule {

    public static readonly firstSet = ["*", TokenType.IDENTIFIER];

    public readonly name = "declarator";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(Pointer.firstSet)){
            return check_rules([new Pointer(), new DirectDeclarator()], tokenStream, this, parent);

        }
        else if (tokenStream.checkFirst(DirectDeclarator.firstSet)){
            return check_rules([new DirectDeclarator()], tokenStream, this, parent);
        }
        return null;
    }

}
