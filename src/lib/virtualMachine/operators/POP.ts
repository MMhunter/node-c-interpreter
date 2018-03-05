import {IOperator, MemoryAddress, MemoryData, MemoryDataType, Register, VirtualMachine} from "../VirtualMachine";

/**
 * Created by mmhunter on 18/08/2017.
 */
export const POP: IOperator = {
    name: "POP",
    call: (param1: Register | MemoryData | MemoryAddress, param2: Register | MemoryData | MemoryAddress, vm: VirtualMachine) => {
        if (param1) {
            if (param1 instanceof Register) {
                return param1.data = vm.stack.pop();
            }
            else if (param1 instanceof MemoryAddress) {
                return vm.memset(param1.index, vm.stack.pop());
            }
        }
        throw new Error("Invalid parameters for " + this.name);
    },

}
