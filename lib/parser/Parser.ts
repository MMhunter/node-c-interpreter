
import {IProductionRule} from "./productions/ProductionRule";
import {Token, TokenType} from "../lexer/Lexer";
/**
 * @file Parser.class.js
 *
 * Created by mmhunter on 09/07/2017.
 */

export class Parser {

    private tokens: TokenStream;

    private ASTRoot: ASTNode;

    constructor(tokens: Token[]){
        this.tokens = new TokenStream(tokens);
        this.program();
    }

    private program() {

    }

}

export class TokenStream{

    private tokens: Token[];

    private index: number = -1;

    constructor(tokens: Token[]){
        this.tokens = tokens;
    }

    public currentToken(): Token{
        return this.tokens[this.index];
    }

    public nextToken(k: number = 1): Token{
        this.index += k ;
        return this.tokens[this.index];
    }

    public lookAhead(k: number = 1): Token{
        return this.tokens[this.index + k];
    }

    public setIndex(index: number){
        this.index = index;
    }

    public currentIndex(): number{
        return this.index;
    }

}

export class ASTNode {

    public parent: ASTNode;

    public nextSibling: ASTNode;
}

export class NonTerminal extends ASTNode {

    public childHead: ASTNode;

    public childTail: ASTNode;

    public nonTerminal: IProductionRule;

    constructor(nonTerminal: IProductionRule){
        super();
        this.nonTerminal = nonTerminal;
    }

    public addChild(node: ASTNode){
        if (!this.childHead){
            this.childHead = node;
        }
        else{
            this.childTail.nextSibling = node;
        }
        this.childTail = node;
    }
}

export class Terminal extends ASTNode{

    public token: Token;

    constructor(token: Token){
        super();
        this.token = token;
    }

}

export function check_rules(rules: Array<(IProductionRule | TokenType | string)>, tokenStream: TokenStream, nonTerminal: IProductionRule): ASTNode {

    let parent = new NonTerminal(nonTerminal);
    for (let rule of rules){
        let node;
        if (rule.hasOwnProperty("apply")){
            node = (rule as IProductionRule).apply(tokenStream);
        }
        else if (rule instanceof TokenType || typeof rule === "string"){
            if (tokenStream.lookAhead().type === rule){
                node = (rule as IProductionRule).apply(tokenStream);
            }
        }

        if (node) {
            parent.addChild(node);
        }
        else {
            return null;
        }
    }
}
