import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class Designation implements IProductionRule {

    public readonly name = "designation";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
