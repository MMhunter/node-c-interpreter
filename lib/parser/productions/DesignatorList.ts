import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class DesignatorList implements IProductionRule {

    public readonly name = "designator_list";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
