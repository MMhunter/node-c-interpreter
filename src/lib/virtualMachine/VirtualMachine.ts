import {ADD} from "./operators/ADD";
import {fromArrayPresenting, fromText} from "./VMCodeParser";
import {SUB} from "./operators/SUB";
import {MOV} from "./operators/MOV";
import {JMP} from "./operators/JMP";
import {JZ} from "./operators/JZ";
import {JNZ} from "./operators/JNZ";
import {CMP} from "./operators/CMP";
/**
 * Created by mmhunter on 18/08/2017.
 */

// here the max memory is not in bytes, since we used the built-in js types to store data to make it simpler

const MAX_MEMORY_LENGTH = 1024 * 1024 * 64;

export class VirtualMachine{

    public stack: Stack;

    private memory: MemoryData[] = [];

    private code: ProgramOperation[] = [];

    // program register
    private pc: Register;

    // accumulator register
    private ax;

    // compare register
    private cf;

    constructor(){
        this.stack = new Stack(this);
    }

    public loadCode(code: ProgramOperation[]){
        this.pc = new Register();
        this.pc.data = MemoryData.Int(0);
        this.code = code;
        this.ax = new Register();
        this.ax.data = MemoryData.Int(0);
        this.cf = new Register();
        this.cf.data = MemoryData.Int(0);
    }

    public memset(index: number, data: MemoryData){
        this.memory[index] = data;
    }

    public memget(index: number, failIfNotAllocated: boolean = true): MemoryData{
        if(!this.memory[index] && failIfNotAllocated){
            throw new Error ("Memory not allocated");
        }
        return this.memory[index];
    }

    public operate(operation: ProgramOperation){
        operation.operate(this);
    }

    public runNextCode(){
        if (this.code[this.pc.data.data]){
            this.pc.data.data ++;
            this.operate(this.code[this.pc.data.data - 1]);
            return true;
        }
        return false;
    }

    public start(){
        while (this.runNextCode()){

        }
    }

    public getRegister(name: string): Register{
        let reg = this[name];
        if (!reg || !(reg instanceof Register)){
            throw new Error("bad reg parameter");
        }
        return reg;
    }

    public jumpTo(value: MemoryData): void {
        if(!value){
            throw new Error("bad pc value");
        }
        if(value.type === MemoryDataType.Integer || value.type === MemoryDataType.Char){
            this.pc.data.data = value.data;
        }
        else if(value.type === MemoryDataType.Float){
            this.pc.data.data = Math.floor(value.data);
        }
    }
}

export class Stack{

    // stack pointer
    private sp: Register;

    constructor(private vm: VirtualMachine, memoryEndIndex: number = MAX_MEMORY_LENGTH - 1){

        this.sp = new Register();
        this.sp.data = MemoryData.Int(memoryEndIndex);
    }

    public push(data: MemoryData){
        this.sp.data.data --;
        this.vm.memset(this.sp.data.data, data);
    }

    public pop(): MemoryData{
        return this.vm.memget(this.sp.data.data);
    }
}

export class Register{

    public data: MemoryData;

}

export class MemoryData {

    public static Int(value: number){
        return new MemoryData(MemoryDataType.Integer, Math.floor(value));
    }

    public static Char(value: string){
        let intVal: number = 0;
        if(value == null || value.length == 0){
            intVal = 0;
        }
        else{
            intVal = value.charCodeAt(0);
        }
        return new MemoryData(MemoryDataType.Char, intVal);
    }

    public static Float(value: number){
        return new MemoryData(MemoryDataType.Float, value);
    }

    constructor(public readonly type: MemoryDataType, public data: any){

    }
}

export enum MemoryDataType{

    Char,
    Integer,
    Float,
}

export class MemoryAddress{

    constructor(public readonly index: number){

    }

}

export interface IOperator{

    readonly name: string;

    readonly call: (param1: Register | MemoryData | MemoryAddress, param2: Register | MemoryData | MemoryAddress, vm: VirtualMachine ) => void;
}

export class ProgramOperation{

    constructor(private readonly operator: IOperator,
                private readonly param1: string | MemoryData,
                private readonly param1asAddress: boolean = false,
                private readonly param2: string | MemoryData,
                private readonly param2asAddress: boolean = false,
    ){

    }

    public operate(vm: VirtualMachine){
        let param1: Register | MemoryData | MemoryAddress = (typeof this.param1 === "string") ? vm.getRegister(this.param1 as string) : (this.param1 as (MemoryData | MemoryAddress));
        let param2: Register | MemoryData | MemoryAddress = (typeof this.param2 === "string") ? vm.getRegister(this.param2 as string) : (this.param2 as (MemoryData | MemoryAddress));
        if (param1 && this.param1asAddress){
            let index: number = (param1 instanceof Register) ? (param1 as Register).data.data : (param1 as MemoryData).data;
            param1 = new MemoryAddress(index);
        }
        if (param2 && this.param2asAddress){
            let index: number = (param2 instanceof Register) ? (param2 as Register).data.data : (param2 as MemoryData).data;
            param2 = new MemoryAddress(index);
        }
        this.operator.call(param1, param2, vm);
    }
}

export const Operators: {[key: string]: IOperator} = {
    "ADD": ADD,
    "SUB": SUB,
    "MOV": MOV,
    "JMP": JMP,
    "JZ" : JZ,
    "JNZ": JNZ,
    "CMP": CMP,
};

export const VMCodeParser = {
    fromArrayPresenting,
    fromText,
};

export function getMemoryData(data:Register | MemoryData | MemoryAddress, vm: VirtualMachine): MemoryData {

    if (data instanceof Register) {
        return data.data;
    }
    else if (data instanceof MemoryAddress) {
        return vm.memget(data.index);
    }
    else if (data instanceof MemoryData) {
        return data;
    }
    return null;
}
