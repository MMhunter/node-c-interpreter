/**
 * @file identifier.js
 *
 * Created by mmhunter on 09/07/2017.
 */

const Lexer = require("../../src/index").lexer;
const expect = require('chai').expect;

let getTokens = function(text){
    return new Lexer(text).tokens;
};

describe('string tokenizer test', function() {

    it('string', function() {
        expect(getTokens(' "this is a string" ')[0].value).to.be.equal("this is a string");
        expect(getTokens(' "this is a 字符串" ')[0].value).to.be.equal("this is a 字符串");
        expect(getTokens(' "this is \\"a\\" 字符串" ')[0].value).to.be.equal("this is \"a\" 字符串");
        expect(getTokens(' "this is " "two 字符串" ')[0].value).to.be.equal("this is ");
        expect(getTokens(' "this is " "two 字符串" ')[1].value).to.be.equal("two 字符串");
        expect(getTokens(' "this is a \u5b57\u7b26\u4e32" ')[0].value).to.be.equal("this is a 字符串");
    });
});