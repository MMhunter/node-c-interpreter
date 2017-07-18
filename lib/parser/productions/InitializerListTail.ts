/**
 * rule:
 * initializer_list_tail
 *     , <initializer> <initializer_list_tail>
 *     , <designation> <initializer> <initializer_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Designation} from "./Designation";
import {Initializer} from "./Initializer";

export class InitializerListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "initializer_list_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst(",")){
            return check_rules([",", new Designation(), new Initializer(), new InitializerListTail()], tokenStream, this)
                || check_rules([",", new Initializer(), new InitializerListTail()], tokenStream, this);
        }
        return check_rules([], tokenStream, this);
    }

}
