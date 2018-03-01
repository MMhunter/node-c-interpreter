import {IOperator, MemoryAddress, MemoryData, MemoryDataType, Register, VirtualMachine} from "../VirtualMachine";
/**
 * Created by mmhunter on 18/08/2017.
 */
export const MOV: IOperator = {
    name : "MOV",
    call :  (param1: Register | MemoryData | MemoryAddress, param2: Register | MemoryData | MemoryAddress, vm: VirtualMachine ) => {
        if (param1 && param2) {
            if (param1 instanceof Register) {
                if (param2 instanceof Register) {
                    return param1.data = param2.data;
                }
                else if (param2 instanceof MemoryAddress) {
                    return param1.data = vm.memget(param2.index);
                }
                else if (param2 instanceof MemoryData) {
                    return param1.data = param2;
                }
            }
            else if (param1 instanceof MemoryAddress) {
                if (param2 instanceof Register) {
                    return vm.memset(param1.index, param2.data);
                }
                else if (param2 instanceof MemoryAddress) {
                    return vm.memset(param1.index,vm.memget(param2.index));
                }
                else if (param2 instanceof MemoryData) {
                    return vm.memset(param1.index, param2);
                }
            }
        }
        throw new Error("Invalid parameters for " + this.name);
    },

};


