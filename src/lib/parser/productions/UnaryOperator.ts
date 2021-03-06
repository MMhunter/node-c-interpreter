/**
 * rule:
 * unary_operator
 *     &
 *     *
 *     +
 *     -
 *     ~
 *     !
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class UnaryOperator implements IProductionRule {

    public static readonly firstSet = ["&", "*", "+", "-", "~", "!"];

    public readonly name = "unary_operator";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules(["&"], tokenStream, this, parent) || check_rules(["*"], tokenStream, this, parent) || check_rules(["+"], tokenStream, this, parent) || check_rules(["-"], tokenStream, this, parent) || check_rules(["~"], tokenStream, this, parent) || check_rules(["!"], tokenStream, this, parent);
    }

}
