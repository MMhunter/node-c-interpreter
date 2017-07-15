/**
 * rule:
 * direct_abstract_declarator_tail
 *     [ ] <direct_abstract_declarator_tail>
 *     [ <assignment_expression> ] <direct_abstract_declarator_tail>
 *     [ * ] <direct_abstract_declarator_tail>
 *     ( ) <direct_abstract_declarator_tail>
 *     ( <parameter_type_list> ) <direct_abstract_declarator_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class DirectAbstractDeclaratorTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "direct_abstract_declarator_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
