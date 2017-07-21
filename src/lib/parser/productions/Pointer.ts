/**
 * rule:
 * pointer
 *     *
 *     * <type_qualifier_list>
 *     * <pointer>
 *     * <type_qualifier_list> <pointer>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {TypeQualifierList} from "./TypeQualifierList";

export class Pointer implements IProductionRule {

    public static readonly firstSet = ["*"];

    public readonly name = "pointer";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules(["*"], tokenStream, this, parent)
            || check_rules(["*", new TypeQualifierList()], tokenStream, this, parent)
            || check_rules(["*", new Pointer()], tokenStream, this, parent)
            || check_rules(["*", new TypeQualifierList(), new Pointer()], tokenStream, this, parent);
    }

}
