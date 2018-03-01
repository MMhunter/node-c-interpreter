import {IOperator, MemoryAddress, MemoryData, MemoryDataType, Register, VirtualMachine} from "../VirtualMachine";
/**
 * Created by mmhunter on 18/08/2017.
 */
export const SUB: IOperator = {
   name : "SUB",
   call :  (param1: Register | MemoryData | MemoryAddress, param2: Register | MemoryData | MemoryAddress, vm: VirtualMachine ) => {
       if (param1 && param2) {
           if (param1 instanceof Register) {
               if (param2 instanceof Register) {
                   return param1.data = sub(param1.data, param2.data);
               }
               else if (param2 instanceof MemoryAddress) {
                   return param1.data = sub(param1.data, vm.memget(param2.index));
               }
               else if (param2 instanceof MemoryData) {
                   return param1.data = sub(param1.data, param2);
               }
           }
           else if (param1 instanceof MemoryAddress) {
               if (param2 instanceof Register) {
                   return vm.memset(param1.index, sub(vm.memget(param1.index), param2.data));
               }
               else if (param2 instanceof MemoryData) {
                   return vm.memset(param1.index, sub(vm.memget(param1.index), param2));
               }
           }
       }
       throw new Error("Invalid parameters for " + this.name);
   },

};

export function sub(data1: MemoryData, data2: MemoryData): MemoryData{
    if (data1.type === MemoryDataType.Integer){
        if (data2.type === MemoryDataType.Integer){
            return new MemoryData(MemoryDataType.Integer, data1.data - data2.data);
        }
        else if (data2.type === MemoryDataType.Float){
            return new MemoryData(MemoryDataType.Float, data1.data - data2.data);
        }
        else if (data2.type === MemoryDataType.Char){
            return new MemoryData(MemoryDataType.Integer, data1.data - data2.data);
        }
    }
    else if (data1.type === MemoryDataType.Float){
        if (data2.type === MemoryDataType.Integer){
            return new MemoryData(MemoryDataType.Float, data1.data - data2.data);
        }
        else if (data2.type === MemoryDataType.Float){
            return new MemoryData(MemoryDataType.Float, data1.data - data2.data);
        }
        else if (data2.type === MemoryDataType.Char){
            return new MemoryData(MemoryDataType.Char, data1.data - data2.data);
        }
    }
    else if (data1.type === MemoryDataType.Char){
        return new MemoryData(MemoryDataType.Char, data1.data - data2.data);
    }
    return null;
}

