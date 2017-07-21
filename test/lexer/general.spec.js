/**
 * @file identifier.js
 *
 * Created by mmhunter on 09/07/2017.
 */

const Lexer = require("../../src/index").lexer.Lexer;
const TokenType = require("../../src/index").lexer.TokenType;
const expect = require('chai').expect;
const fs = require("fs");
const path = require("path");

let getTokens = function(text){
    return new Lexer(text).tokens;
};

describe('general tokenizer test', function() {

    it('simple', function() {
        let codeString = "void foo(){ int bar=1}";
        let tokens = getTokens(codeString);
        console.log(tokens);
        expect(tokens[0].type).to.be.equal(TokenType.VOID);
        expect(tokens[1].type).to.be.equal(TokenType.IDENTIFIER);
        expect(tokens[2].type).to.be.equal('(');
        expect(tokens[3].type).to.be.equal(')');
        expect(tokens[4].type).to.be.equal('{');
        expect(tokens[5].type).to.be.equal(TokenType.INT);
        expect(tokens[6].type).to.be.equal(TokenType.IDENTIFIER);
        expect(tokens[7].type).to.be.equal('=');
        expect(tokens[8].type).to.be.equal(TokenType.CONSTANT);
        expect(tokens[9].type).to.be.equal('}');
    });

    it('testfile', function() {
        let codeString = fs.readFileSync(path.join(__dirname,"./general.c"),"utf8");
        let lexer = new Lexer(codeString);
        console.log(lexer.tokens);
        console.log(lexer.errors);
        console.log(lexer.supportTokens);
        console.log(lexer.tokens.map(t=>t.text).join(" "));
    });
});