/**
 * @file identifier.js
 *
 * Created by mmhunter on 09/07/2017.
 */

const codeParser=  require("../../build/index").VMCodeParser;
const fs = require("fs");
const path = require("path");
const expect = require('chai').expect;

let getTokens = function(text){
    return new Lexer(text).tokens;
};

describe('vm code parser test', function() {

    it('test', function() {
        let code = codeParser.fromText(
            "ADD [ax] \"12\""
        );
        expect(code[0].operator.name).to.be.equal("ADD");
        expect(code[0].param1asAddress).to.be.equal(true);
        console.log(code);

    });
});