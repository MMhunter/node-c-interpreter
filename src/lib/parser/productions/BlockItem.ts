/**
 * rule:
 * block_item
 *     <declaration>
 *     <statement>
 */
import {ASTNode, check_rules, NonTerminal, ParsingErrorTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Declaration} from "./Declaration";
import {Statement} from "./Statement";

export class BlockItem implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE, TokenType.IDENTIFIER, TokenType.CASE, TokenType.DEFAULT, "{", ";", TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF, TokenType.IF, TokenType.SWITCH, TokenType.WHILE, TokenType.DO, TokenType.FOR, TokenType.GOTO, TokenType.CONTINUE, TokenType.BREAK, TokenType.RETURN];

    public readonly name = "block_item";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        let result = check_rules([new Declaration()], tokenStream, this, parent)
            || check_rules([new Statement()], tokenStream, this, parent);
        if (!result){
            // panic error recovery
            let start = tokenStream.currentIndex() + 1;
            if (tokenStream.checkFirst("{")){
                tokenStream.jumpUntil("}");
            }
            else{
                let token = tokenStream.nextToken();
                let compoundStack = [];
                while (token && (!(token.type === ";") || compoundStack.length > 0)){
                    if (token.type === "{"){
                        compoundStack.push("{");
                    }
                    else if (token.type === "}"){
                        if (compoundStack.length > 0){
                            compoundStack.pop();
                            if (compoundStack.length === 0){
                                break;
                            }
                        }
                        else{
                            tokenStream.setIndex(tokenStream.currentIndex() - 1);
                            break;
                        }
                    }
                    token = tokenStream.nextToken();
                }
            }
            let tokens = tokenStream.tokens.slice(start, tokenStream.currentIndex() + 1);
            let r = new ParsingErrorTerminal(tokens);
            parent.addChild(r);
            return r;
        }
        return result;
    }

}
