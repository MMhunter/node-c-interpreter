/**
 * @file identifier.js
 *
 * Created by mmhunter on 09/07/2017.
 */

const VirtualMachine=  require("../../build/index").VirtualMachine;
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
            [
            "MOV ax 1",
            "MOV [ax] 14",
            "ADD [ax] 12",
            "CMP [ax] 100",
            "CMP cf 1",
            "JNZ cf 2"
            ].join("\n")
        );
        console.log(code);
        let vm = new VirtualMachine();
        vm.loadCode(code);
        while(vm.runNextCode()){
            console.log(vm.memget(vm.getRegister("ax").data.data, false))
        };

    });
});