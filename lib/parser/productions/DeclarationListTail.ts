/**
 * rule:
 * declaration_list_tail
 *     <declaration> <declaration_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Declaration} from "./Declaration";

export class DeclarationListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "declaration_list_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(Declaration.firstSet)){
            return check_rules([new Declaration(), new DeclarationListTail()], tokenStream, this, parent);
        }
        else{
            return check_rules([], tokenStream, this, parent);
        }
    }

}
