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
import {TypeQualifierList} from "./TypeQualifierList";
import {AssignmentExpression} from "./AssignmentExpression";
import {ParameterTypeList} from "./ParameterTypeList";
import {IdentifierList} from "./IdentifierList";

export class DirectDeclaratorTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "direct_declarator_tail";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst("[")){
           return check_rules(["[", new TypeQualifierList(), new AssignmentExpression(), "]", new DirectDeclaratorTail()], tokenStream, this)
               || check_rules(["[", new TypeQualifierList(), "]", new DirectDeclaratorTail()], tokenStream, this)
               || check_rules(["[" , new AssignmentExpression(), "]", new DirectDeclaratorTail()], tokenStream, this)
               || check_rules(["[", TokenType.STATIC,  new TypeQualifierList(), new AssignmentExpression(), "]", new DirectDeclaratorTail()], tokenStream, this)
               || check_rules(["[", new TypeQualifierList(), TokenType.STATIC, new AssignmentExpression(), "]", new DirectDeclaratorTail()], tokenStream, this)
               || check_rules(["[", new TypeQualifierList(), "*", "]", new DirectDeclaratorTail()], tokenStream, this)
               || check_rules(["[", "*", "]", new DirectDeclaratorTail()], tokenStream, this)
               || check_rules(["[", "]", new DirectDeclaratorTail()], tokenStream, this) ;
        }
        else if (tokenStream.checkFirst("(")){
            return check_rules(["(", new ParameterTypeList(), ")", new DirectDeclaratorTail()], tokenStream, this)
                || check_rules(["(", new IdentifierList(), ")", new DirectDeclaratorTail()], tokenStream, this)
                || check_rules(["(", ")", new DirectDeclaratorTail()], tokenStream, this);
        }
        else {
            return check_rules([], tokenStream, this);
        }
    }

}
