/**
 * @file identifier.js
 *
 * Created by mmhunter on 09/07/2017.
 */

const Lexer = require("../../src/index").lexer.Lexer;
const expect = require('chai').expect;

let getTokens = function(text){
    return new Lexer(text).tokens;
};

describe('identifier tokenizer test', function() {

    it('valid identifier', function() {
        expect(getTokens(" thisIsId ")[0].text).to.be.equal("thisIsId");
        expect(getTokens(" 傻逼 ")[0].text).to.be.equal("傻逼");
    });

    it('position', function() {
        let token = getTokens("\n thisIs9Id ")[0];
        expect(token.text).to.be.equal("thisIs9Id");
        expect(token.line).to.be.equal(1);
        expect(token.offset).to.be.equal(1);
    });
});