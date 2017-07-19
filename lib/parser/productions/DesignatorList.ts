/**
 * rule:
 * designator_list
 *     <designator> <designator_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Designator} from "./Designator";
import {DesignatorListTail} from "./DesignatorListTail";

export class DesignatorList implements IProductionRule {

    public static readonly firstSet = ["[", "."];

    public readonly name = "designator_list";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(Designator.firstSet)){
            return check_rules([new Designator(), new DesignatorListTail()], tokenStream, this, parent);
        }
        return null;
    }

}
