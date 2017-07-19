
import {IProductionRule} from "./productions/ProductionRule";
import {Token, TokenType} from "../lexer/Lexer";
import {TranslationUnit} from "./productions/TranslationUnit";
/**
 * @file Parser.class.js
 *
 * Created by mmhunter on 09/07/2017.
 */

export class Parser {

    public ASTRoot: ASTNode;
    public tokens: TokenStream;
    public mostValidTree: any;
    public rootRule: IProductionRule;

    constructor(tokens: Token[], rootRule: IProductionRule = new TranslationUnit()){
        this.tokens = new TokenStream(tokens);
        this.tokens.parser = this;
        this.rootRule = rootRule;
        this.program();
    }

    private program() {
        this.ASTRoot = new NonTerminal(null);
        this.rootRule.apply(this.tokens, this.ASTRoot as NonTerminal);
    }

}

export class TokenStream{

    public mostValidIndex: number = -1;

    public parser: Parser;

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
        if (this.index > this.mostValidIndex){
            this.mostValidIndex = this.index;
            this.parser.mostValidTree = this.parser.ASTRoot.makeCopy();
        }
        return this.tokens[this.index];
    }

    public lookAhead(k: number = 1): Token{
        return this.tokens[this.index + k];
    }

    public setIndex(index: number){
        this.index = index;
        if (this.index > this.mostValidIndex){
            this.mostValidIndex = this.index;
            this.parser.mostValidTree = this.parser.ASTRoot.makeCopy();
        }
    }

    public currentIndex(): number{
        return this.index;
    }

    public checkFirst(setOrType: Array <TokenType | string> | TokenType | string): boolean{
        if (!this.lookAhead()){
            return false;
        }
        if (setOrType instanceof Array){
            return setOrType.indexOf(this.lookAhead().type) !== -1;
        }
        else {
            return setOrType === this.lookAhead().type;
        }

    }
}

export class ASTNode {

    public parent: ASTNode;

    public makeCopy(){
        return null;
    }
}

export class NonTerminal extends ASTNode {

    public children: ASTNode[] = [];

    public nonTerminal: IProductionRule;

    constructor(nonTerminal: IProductionRule){
        super();
        this.nonTerminal = nonTerminal;
    }

    public addChild(node: ASTNode){

        this.children.push(node);
        node.parent = this;
    }

    public removeChild(node: ASTNode){
        let index = this.children.indexOf(node);
        if (index !== -1){
            this.children.splice(index, 1);
        }
    }

    public findRoot(){
        let node: ASTNode = this;
        while (node.parent){
            node = node.parent;
        }
        return node;

    }

    public getName(){
        if (this.nonTerminal){
            return this.nonTerminal.name;
        }
        else{
            return "root";
        }
    }

    public makeCopy(){
        let copy = new NonTerminal(this.nonTerminal);
        copy.children = this.children.map(c=>{
            return c.makeCopy();
        });
        return copy;
    }

}

export class Terminal extends ASTNode{

    public token: Token;

    constructor(token: Token){
        super();
        this.token = token;
    }

    public makeCopy(){
        return new Terminal(this.token);
    }


}

export function check_rules(rules: Array< IProductionRule | TokenType | string>, tokenStream: TokenStream, nonTerminal: IProductionRule, parent: NonTerminal): ASTNode {

    let result = new NonTerminal(nonTerminal);
    let savedIndex = tokenStream.currentIndex();
    parent.addChild(result);
    for (let rule of rules){
        let node;
        if (typeof rule === "object"){
            node = (rule as IProductionRule).apply(tokenStream, result);
        }
        else {
            if (tokenStream.lookAhead() && tokenStream.lookAhead().type === rule){
                let token = tokenStream.lookAhead();
                node = new Terminal(token);
                result.addChild(node);
                tokenStream.nextToken();
            }
        }

        if (node) {

        }
        else {
            tokenStream.setIndex(savedIndex);
            parent.removeChild(result);
            return null;
        }
    }
    return result;
}
