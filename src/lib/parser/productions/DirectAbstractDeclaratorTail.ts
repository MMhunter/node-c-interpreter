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
import {AssignmentExpression} from "./AssignmentExpression";
import {ParameterTypeList} from "./ParameterTypeList";

export class DirectAbstractDeclaratorTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "direct_abstract_declarator_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst("[")){
            if (tokenStream.lookAhead(2) && tokenStream.lookAhead(2).type === "]"){
                return check_rules(["[", "]", new DirectAbstractDeclaratorTail()], tokenStream, this, parent);
            }
            else if (tokenStream.lookAhead(2) && tokenStream.lookAhead(2).type === "*" && tokenStream.lookAhead(3) && tokenStream.lookAhead(3).type === "]" ){
                return check_rules(["[", "*", "]", new DirectAbstractDeclaratorTail()], tokenStream, this, parent);
            }
            else{
                return check_rules(["[", new AssignmentExpression(), "]", new DirectAbstractDeclaratorTail()], tokenStream, this, parent);
            }
        }
        else if (tokenStream.checkFirst("(")){
            if (tokenStream.lookAhead(2) && tokenStream.lookAhead(2).type === ")"){
                return check_rules(["(" , ")", new DirectAbstractDeclaratorTail()], tokenStream, this, parent);
            }
            else {
                return check_rules(["(" , new ParameterTypeList() , ")", new DirectAbstractDeclaratorTail()], tokenStream, this, parent);
            }
        }else{
            return check_rules([], tokenStream, this, parent);
        }
    }

}
