import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class AssignmentOperator implements IProductionRule {

    public readonly name = "assignment_operator";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
