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

describe('identifier tokenizer test', function() {

    it('valid identifier', function() {
        expect(getTokens(" thisIsId ")[0].text).to.be.equal("thisIsId");
    });

    it('position', function() {
        let token = getTokens("\n thisIs9Id ")[0];
        expect(token.text).to.be.equal("thisIs9Id");
        expect(token.line).to.be.equal(1);
        expect(token.offset).to.be.equal(1);
    });
});