import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class JumpStatement implements IProductionRule {

    public readonly name = "jump_statement";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
