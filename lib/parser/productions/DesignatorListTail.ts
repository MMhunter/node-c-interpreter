/**
 * rule:
 * designator_list_tail
 *     <designator> <designator_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Designator} from "./Designator";

export class DesignatorListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "designator_list_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(Designator.firstSet)){
           return check_rules([new Designator(), new DesignatorListTail()], tokenStream, this, parent);
        }
        else {
            return check_rules([], tokenStream, this, parent);
        }
    }

}
