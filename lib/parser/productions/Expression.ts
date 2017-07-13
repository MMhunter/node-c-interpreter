import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";
/**
 * Created by mmhunter on 11/07/2017.
 */
export class Expression implements IProductionRule{

    public readonly name = "expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return undefined;
    }

}

