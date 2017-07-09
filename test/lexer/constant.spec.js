/**
 * @file identifier.js
 *
 * Created by mmhunter on 09/07/2017.
 */

const Lexer = require("../../index").lexer;
const expect = require('chai').expect;

let getTokens = function(text){
    return new Lexer(text).tokens;
};

describe('constant tokenizer test', function() {

    it('integer', function() {
        expect(getTokens(" 12 ")[0].value).to.be.equal(12);
        expect(getTokens(" 0x11 ")[0].value).to.be.equal(0x11);
        expect(getTokens(" 013 ")[0].value).to.be.equal(11);
    });

    it('float', function() {
        expect(getTokens(" .12 ")[0].value).to.be.equal(.12);
        expect(getTokens(" .12f ")[0].value).to.be.equal(.12);
        expect(getTokens(" 0.12f ")[0].value).to.be.equal(.12);
        expect(getTokens(" 00.12 ")[0].value).to.be.equal(.12);
        expect(getTokens(" 01.12 ")[0].value).to.be.equal(1.12);
        expect(getTokens(" 01.12E2 ")[0].value).to.be.equal(112);
        expect(getTokens(" 1.12a ").length).to.be.equal(0);
    });

    it('position', function() {
        let token = getTokens("\n thisIs9Id ")[0];
        expect(token.text).to.be.equal("thisIs9Id");
        expect(token.line).to.be.equal(1);
        expect(token.offset).to.be.equal(1);
    });
});