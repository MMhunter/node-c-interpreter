import {IProductionRule} from "./ProductionRule";
import {ASTNode, TokenStream} from "../Parser";

export class AssignmentExpression implements IProductionRule {

    public readonly name = "assignment_expression";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
