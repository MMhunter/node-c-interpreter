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
import {FunctionDefinition} from "./FunctionDefinition";

export class BlockItem implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE, TokenType.IDENTIFIER, TokenType.CASE, TokenType.DEFAULT, "{", ";", TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF, TokenType.IF, TokenType.SWITCH, TokenType.WHILE, TokenType.DO, TokenType.FOR, TokenType.GOTO, TokenType.CONTINUE, TokenType.BREAK, TokenType.RETURN];

    public readonly name = "block_item";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        let result = check_rules([new Declaration()], tokenStream, this, parent)
            || check_rules([new Statement()], tokenStream, this, parent);
        if (!result){
            // panic error recovery
            let currentCompound = parent.findNearestParent("compound_statement");
            if (currentCompound && currentCompound.parent instanceof FunctionDefinition){
                return null;
            }
            let start = tokenStream.currentIndex() + 1;
            if (tokenStream.checkFirst("{")){
                tokenStream.jumpUntil("}");
            }
            else{
                let compoundStack = [];
                while (tokenStream.lookAhead() && (!(tokenStream.lookAhead().type === ";") && !(tokenStream.lookAhead().line !== tokenStream.currentToken().line) || compoundStack.length > 0)){
                    if (tokenStream.lookAhead().type === "{"){
                        compoundStack.push("{");
                    }
                    else if (tokenStream.lookAhead().type === "}"){
                        if (compoundStack.length > 0){
                            compoundStack.pop();
                            if (compoundStack.length === 0){
                                tokenStream.nextToken();
                                break;
                            }
                        }
                        else{
                            break;
                        }
                    }
                    tokenStream.nextToken();
                }
            }
            while (tokenStream.currentToken() && tokenStream.currentToken().type !== ";" && tokenStream.checkFirst(";")){
                tokenStream.nextToken();
            }
            let tokens = tokenStream.tokens.slice(start, tokenStream.currentIndex() + 1);
            if (tokens.length === 0){
                return null;
            }
            let r = new ParsingErrorTerminal(tokens);
            parent.addChild(r);
            return r;
        }
        return result;
    }

}
