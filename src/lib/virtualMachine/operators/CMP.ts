import {
    getMemoryData, IOperator, MemoryAddress, MemoryData, MemoryDataType, Register,
    VirtualMachine
} from "../VirtualMachine";
import {sub} from "./SUB";

/**
 * Created by mmhunter on 18/08/2017.
 */
export const CMP: IOperator = {
    name: "CMP",
    call: (param1: Register | MemoryData | MemoryAddress, param2: Register | MemoryData | MemoryAddress, vm: VirtualMachine) => {
        if (param1 && param2) {
            let cf = vm.getRegister("cf");
            let value1 = getMemoryData(param1, vm);
            let value2 = getMemoryData(param2, vm);
            let data = sub(value1, value2);
            if (data.data > 0) {
                cf.data = MemoryData.Int(1);
            } else if (data.data < 0) {
                cf.data = MemoryData.Int(-1);
            } else {
                cf.data = MemoryData.Int(0);
            }

            return;
        }
        throw new Error("Invalid parameters for " + this.name);
    },

};