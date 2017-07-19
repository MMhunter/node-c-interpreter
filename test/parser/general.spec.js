/**
 * @file identifier.js
 *
 * Created by mmhunter on 09/07/2017.
 */

const Lexer = require("../../index").lexer.Lexer;
const TokenType = require("../../index").lexer.TokenType;
const expect = require('chai').expect;
const Parser = require("../../index").parser.Parser;
const fs = require("fs");
const path = require("path");

let getTokens = function(text){
    return new Lexer(text).tokens;
};

describe('general tokenizer test', function() {

    it('testfile', function() {
        let codeString = fs.readFileSync(path.join(__dirname,"./general.c"),"utf8");
        let lexer = new Lexer(codeString);
        // console.log(lexer.tokens);
        // console.log(lexer.errors);
        // console.log(lexer.supportTokens);
        // console.log(lexer.tokens.map(t=>t.text).join(" "));

        let parser = new Parser(lexer.tokens);
        console.log(parser.ASTRoot);
    });
});