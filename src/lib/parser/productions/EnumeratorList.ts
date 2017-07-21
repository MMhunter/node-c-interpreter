/**
 * rule:
 * enumerator_list
 *     <enumerator> <enumerator_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {EnumeratorListTail} from "./EnumeratorListTail";
import {Enumerator} from "./Enumerator";

export class EnumeratorList implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER];

    public readonly name = "enumerator_list";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new Enumerator(), new EnumeratorListTail()], tokenStream, this, parent);
    }

}
