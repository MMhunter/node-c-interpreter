import {IOperator, MemoryData, Operators, ProgramOperation} from "./VirtualMachine";
/**
 * Created by mmhunter on 18/08/2017.
 */
export function fromArrayPresenting(code: string[][]): ProgramOperation[]{
    return code.map(readLine);
}

function readLine(line: string[]): ProgramOperation {
    let opeator = readOperator(line[0]);
    let p1 = readParameter(line[1]);
    let p2 = readParameter(line[2]);
    return new ProgramOperation(opeator, p1.param, p1.paramAsAddress, p2.param, p2.paramAsAddress);
}

function readOperator(text: string): IOperator {
    return Operators[text];
}

function readParameter(text: string): {param: string | MemoryData, paramAsAddress: boolean}{
    if(text == null){
        return {
            param:null,
            paramAsAddress: false,
        };
    }
    let addrMatch = /^\[(.+)]$/.exec(text);
    let isAddr = false;
    let param = null;
    if (addrMatch){
        isAddr = true;
        text = addrMatch[1];
    }

    if (/^'([^']|\\')*'$/.test(text)){
        param = MemoryData.Char(/^'([^']|\\')*'$/.exec(text)[1]);
    }
    else if (/^(0[xX][a-fA-F0-9]+)$/.test(text)){
        param = MemoryData.Int(parseInt(text, 16));
    }
    else if (/^([0-9]+)$/.test(text)){
        param = MemoryData.Int(parseInt(text, 10));
    }
    else if (/^([0-9]*\.[0-9]*)$/.test(text)){
        param = MemoryData.Float(parseFloat(text));
    }
    else {
        param = text;
    }

    return {
        param,
        paramAsAddress: isAddr,
    };
}

export function fromText(text: string): ProgramOperation[]{
    return fromArrayPresenting(text.split("\n").map((l) => l.trim().split(" ")));
}
