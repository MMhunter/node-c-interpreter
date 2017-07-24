/**
 * @file identifier.js
 *
 * Created by mmhunter on 09/07/2017.
 */

const Lexer = require("../../build/index").Lexer;
const Parser = require("../../build/index").Parser;
const fs = require("fs");
const path = require("path");

let getTokens = function(text){
    return new Lexer(text).tokens;
};

describe('general tokenizer test', function() {

    it('testfile', function() {
        let codeString = fs.readFileSync(path.join(__dirname,"./general2.c"),"utf8");

        let lexer = new Lexer(codeString);
        // console.log(lexer.tokens);
        // console.log(lexer.errors);
        // console.log(lexer.supportTokens);
        // console.log(lexer.tokens.map(t=>t.text).join(" "));
        let parser;
        try{
            parser = new Parser(lexer.tokens);
        }
        catch (e){
            console.error(e);
        }
        //let obj = parser.ASTRoot.toObj();

        let functions = parser.ASTRoot.findDescendant("error");

        console.log(functions.map(s=>s.content));
    });
});