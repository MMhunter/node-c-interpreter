/**
 * rule:
 * direct_declarator_tail
 *     [ <type_qualifier_list> <assignment_expression> ] <direct_declarator_tail>
 *     [ <type_qualifier_list> ] <direct_declarator_tail>
 *     [ <assignment_expression> ] <direct_declarator_tail>
 *     [ STATIC <type_qualifier_list> <assignment_expression> ] <direct_declarator_tail>
 *     [ <type_qualifier_list> STATIC <assignment_expression> ] <direct_declarator_tail>
 *     [ <type_qualifier_list> * ] <direct_declarator_tail>
 *     [ * ] <direct_declarator_tail>
 *     [ ] <direct_declarator_tail>
 *     ( <parameter_type_list> ) <direct_declarator_tail>
 *     ( <identifier_list> ) <direct_declarator_tail>
 *     ( ) <direct_declarator_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class DirectDeclaratorTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "direct_declarator_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        return null;
    }

}
