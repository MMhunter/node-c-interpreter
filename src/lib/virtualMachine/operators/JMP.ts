import {IOperator, MemoryAddress, MemoryData, MemoryDataType, Register, VirtualMachine} from "../VirtualMachine";

/**
 * Created by mmhunter on 18/08/2017.
 */
export const JMP: IOperator = {
    name: "JMP",
    call: (param1: Register | MemoryData | MemoryAddress, param2: Register | MemoryData | MemoryAddress, vm: VirtualMachine) => {
        if (param1) {
            if (param1 instanceof Register) {
                return vm.jumpTo(param1.data);
            }
            else if (param1 instanceof MemoryAddress) {
                return vm.jumpTo(vm.memget(param1.index));
            }
            else if (param1 instanceof MemoryData){
                return vm.jumpTo(param1);
            }
        }
        throw new Error("Invalid parameters for " + this.name);
    },

};