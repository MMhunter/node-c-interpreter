import {IOperator, MemoryAddress, MemoryData, MemoryDataType, Register, VirtualMachine} from "../VirtualMachine";

/**
 * Created by mmhunter on 18/08/2017.
 */
export const PUSH: IOperator = {
    name: "PUSH",
    call: (param1: Register | MemoryData | MemoryAddress, param2: Register | MemoryData | MemoryAddress, vm: VirtualMachine) => {
        if (param1) {
            if (param1 instanceof Register) {
                return vm.stack.push(param1.data);
            }
            else if (param1 instanceof MemoryAddress) {
                return vm.stack.push(vm.memget(param1.index));
            }
            else if (param1 instanceof MemoryData){
                return vm.stack.push(param1);
            }
        }
        throw new Error("Invalid parameters for " + this.name);
    },

}