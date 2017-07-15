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

    public apply(tokenStream: TokenStream): ASTNode {
        let savedIndex = tokenStream.currentIndex();

        if ( tokenStream.checkFirst(Pointer.firstSet) && !tokenStream.checkFirst(DirectAbstractDeclarator.firstSet)){
            let node = check_rules([new Pointer(), new DirectAbstractDeclarator()], tokenStream, this);
            if (node){
                return node;
            }
            else{
                tokenStream.setIndex(savedIndex);
            }
            node = check_rules([new Pointer(), new DirectAbstractDeclarator()], tokenStream, this);

        }

        return null;
    }

}
