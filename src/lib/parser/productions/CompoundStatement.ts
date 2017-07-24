/**
 * rule:
 * compound_statement
 *     { }
 *     { <block_item_list> }
 */
import {ASTNode, check_rules, NonTerminal, ParsedToken, ParsingErrorTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {Token, TokenType} from "../../lexer/Lexer";
import {BlockItemList} from "./BlockItemList";

export class CompoundStatement implements IProductionRule {

    public static readonly firstSet = ["{"];

    public readonly name = "compound_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {

        if (tokenStream.checkFirst("{")){
            if (tokenStream.lookAhead(2) && tokenStream.lookAhead(2).type === "}"){
                return check_rules(["{", "}"], tokenStream, this, parent);
            }
            else{
                let result = check_rules(["{", new BlockItemList()], tokenStream, this, parent);
                if (result){
                    if (tokenStream.checkFirst("}")){
                        result.addChild(new Terminal(tokenStream.nextToken()));
                    }
                    else{
                        // only if EOF has no end compound
                        let fakeToken = new ParsedToken(new Token("}", "}", tokenStream.currentToken().line, tokenStream.currentToken().offset + tokenStream.currentToken().text.length));
                        let error = new ParsingErrorTerminal([fakeToken]);
                        error.expected = true;
                        result.addChild(error);
                    }
                }
                return result;

            }

        }

        return null;
    }

}
