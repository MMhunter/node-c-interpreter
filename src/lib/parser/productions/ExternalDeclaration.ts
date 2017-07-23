/**
 * rule:
 * external_declaration
 *     <function_definition>
 *     <declaration>
 */
import {ASTNode, check_rules, NonTerminal, ParsingErrorTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {FunctionDefinition} from "./FunctionDefinition";
import {Declaration} from "./Declaration";

export class ExternalDeclaration implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "external_declaration";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {

        let result = check_rules([new FunctionDefinition()], tokenStream, this, parent) || check_rules([new Declaration()], tokenStream, this, parent);

        if (!result && tokenStream.lookAhead()){
            let start = tokenStream.currentIndex() + 1;
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
                        break;
                    }
                }
                token = tokenStream.nextToken();
            }

            let tokens = tokenStream.tokens.slice(start, tokenStream.currentIndex() + 1);
            let r = new ParsingErrorTerminal(tokens);
            parent.addChild(r);
            return r;
        }
        return result;
    }

}
