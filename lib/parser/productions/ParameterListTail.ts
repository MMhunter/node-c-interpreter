/**
 * rule:
 * parameter_list_tail
 *     , <parameter_declaration> <parameter_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ParameterDeclaration} from "./ParameterDeclaration";

export class ParameterListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "parameter_list_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([",", new ParameterDeclaration(), new ParameterListTail()], tokenStream, this, parent)
            || check_rules([], tokenStream, this, parent);
    }

}
