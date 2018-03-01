import {
    getMemoryData, IOperator, MemoryAddress, MemoryData, MemoryDataType, Register,
    VirtualMachine
} from "../VirtualMachine";

/**
 * Created by mmhunter on 18/08/2017.
 */
export const JZ: IOperator = {
    name: "JZ",
    call: (param1: Register | MemoryData | MemoryAddress, param2: Register | MemoryData | MemoryAddress, vm: VirtualMachine) => {
        if (param1 && param2) {
            let value:MemoryData = getMemoryData(param1, vm);
            let addr:MemoryData = getMemoryData(param2, vm);
            if (value.data === 0) {
                vm.jumpTo(addr);
            }
            return;
        }
        throw new Error("Invalid parameters for " + this.name);
    },

};