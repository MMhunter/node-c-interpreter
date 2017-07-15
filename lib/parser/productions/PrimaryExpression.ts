import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Expression} from "./Expression";

/**
 * Created by mmhunter on 11/07/2017.
 */
export class PrimaryExpression implements IProductionRule{

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "("];

    public readonly name = "primary_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.lookAhead().type === TokenType.IDENTIFIER){
            let node = new NonTerminal(this);
            node.addChild(new Terminal(tokenStream.nextToken()));
            return node;
        }
        if (tokenStream.lookAhead().type === TokenType.CONSTANT){
            let node = new NonTerminal(this);
            node.addChild(new Terminal(tokenStream.nextToken()));
            return node;
        }
        if (tokenStream.lookAhead().type === TokenType.STRING_LITERAL){
            let node = new NonTerminal(this);
            node.addChild(new Terminal(tokenStream.nextToken()));
            return node;
        }
        if (tokenStream.lookAhead().type === "("){
            let savedIndex = tokenStream.currentIndex();
            let node = check_rules(["(", new Expression(), ")"], tokenStream, this);
            if ( node ){
                return node;
            }
            else {
                tokenStream.setIndex(savedIndex);
            }

        }
        return null;
    }

}
