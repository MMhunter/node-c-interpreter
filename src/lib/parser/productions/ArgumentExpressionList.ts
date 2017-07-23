/**
 * rule:
 * argument_expression_list
 *     <assignment_expression> <argument_expression_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, ParsedToken, ParsingErrorTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AssignmentExpression} from "./AssignmentExpression";
import {ArgumentExpressionListTail} from "./ArgumentExpressionListTail";

export class ArgumentExpressionList implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF];

    public readonly name = "argument_expression_list";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {

        // let result: NonTerminal =  check_rules([new AssignmentExpression(), new ArgumentExpressionListTail()], tokenStream, this, parent) as NonTerminal;
        //
        // // error handling
        //
        // if (!result){
        //     result = new NonTerminal(new ArgumentExpressionList());
        //     let start = tokenStream.currentIndex() + 1;
        //     let compoundStack = [];
        //     while (tokenStream.lookAhead() && (!(tokenStream.lookAhead().type === "," || tokenStream.lookAhead().type === ";" || tokenStream.lookAhead().type === ")") || compoundStack.length > 0)){
        //         if (tokenStream.lookAhead().type === "(" ){
        //             compoundStack.push("(");
        //         }
        //         else if (tokenStream.lookAhead().type === ")"){
        //             compoundStack.pop();
        //             if (compoundStack.length === 0){
        //                 break;
        //             }
        //         }
        //         tokenStream.nextToken();
        //     }
        //     let tokens = tokenStream.tokens.slice(start, tokenStream.currentIndex() + 1);
        //
        //     result.addChild(new ParsingErrorTerminal(tokens));
        //     let r = new ArgumentExpressionListTail().apply(tokenStream, result);
        //     parent.addChild(result);
        // }
        // return result;

        let argumentTokens = [];
        let parenthesisStack = [];
        let parenthesisMap = {
            "}": "{",
            ">": "{",
            ")": "(",
            "]": "[",
        };
        parenthesisStack.push(tokenStream.currentToken().type);
        let start = tokenStream.currentIndex() + 1;
        let result = new NonTerminal(new ArgumentExpressionList());
        let hasParenthesisError = false;
        while (tokenStream.lookAhead() && (!(tokenStream.lookAhead().type === ";") || parenthesisStack.length > 0)) {
            if (tokenStream.lookAhead().type === "(" || tokenStream.lookAhead().type === "[" || tokenStream.lookAhead().type === "{" || tokenStream.lookAhead().type === "<") {
                parenthesisStack.push(tokenStream.lookAhead().type);
            }
            else if (parenthesisMap[tokenStream.lookAhead().type]) {
                if (parenthesisStack[parenthesisStack.length - 1 ] === parenthesisMap[tokenStream.lookAhead().type]){
                    parenthesisStack.pop();
                }
                else {
                    let lastIndex = parenthesisStack.lastIndexOf(parenthesisMap[tokenStream.lookAhead().type]);
                    if (lastIndex !== -1){
                        parenthesisStack.splice(lastIndex, parenthesisStack.length - lastIndex);
                    }
                    hasParenthesisError = true;
                }
                if (parenthesisStack.length === 0) {
                    break;
                }
            }
            if (parenthesisStack.length === 1 && tokenStream.checkFirst(",")){
                this.parseArgument(tokenStream.tokens.slice(start, tokenStream.currentIndex() + 1), result, hasParenthesisError);
                result.addChild(new Terminal(tokenStream.lookAhead()));
                start = tokenStream.currentIndex() + 2;
                hasParenthesisError = false;
            }
            tokenStream.nextToken();
        }

        this.parseArgument(tokenStream.tokens.slice(start, tokenStream.currentIndex() + 1), result, hasParenthesisError);

        if (tokenStream.checkFirst(")")){
            parent.addChild(result);
            return result;
        }
        else{
            return null;
        }

    }

    private parseArgument(tokens: ParsedToken[], parent: NonTerminal, hasParenthesisError: boolean){
        if (hasParenthesisError){
            parent.addChild(new ParsingErrorTerminal(tokens));
            return;
        }
        let subStream = new TokenStream(tokens);
        let r = new AssignmentExpression().apply(subStream, parent);
        if (!r){
            parent.addChild(new ParsingErrorTerminal(tokens));
        }
        else if ( subStream.currentIndex() < subStream.tokens.length - 1){
            parent.removeChild(r);
            parent.addChild(new ParsingErrorTerminal(tokens));
        }
    }

}
