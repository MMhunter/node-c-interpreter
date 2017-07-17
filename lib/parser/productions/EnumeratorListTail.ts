/**
 * rule:
 * enumerator_list_tail
 *     , <enumerator> <enumerator_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Enumerator} from "./Enumerator";

export class EnumeratorListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "enumerator_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst(",")){
           return check_rules([",", new Enumerator(), new EnumeratorListTail()], tokenStream, this);
        }
        else{
            return check_rules([], tokenStream, this);
        }
    }

}
