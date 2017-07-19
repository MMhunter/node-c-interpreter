/**
 * rule:
 * assignment_operator
 *     =
 *     MUL_ASSIGN
 *     DIV_ASSIGN
 *     MOD_ASSIGN
 *     ADD_ASSIGN
 *     SUB_ASSIGN
 *     LEFT_ASSIGN
 *     RIGHT_ASSIGN
 *     AND_ASSIGN
 *     XOR_ASSIGN
 *     OR_ASSIGN
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class AssignmentOperator implements IProductionRule {

    public static readonly firstSet = ["=", TokenType.MUL_ASSIGN, TokenType.DIV_ASSIGN, TokenType.MOD_ASSIGN, TokenType.ADD_ASSIGN, TokenType.SUB_ASSIGN, TokenType.LEFT_ASSIGN, TokenType.RIGHT_ASSIGN, TokenType.AND_ASSIGN, TokenType.XOR_ASSIGN, TokenType.OR_ASSIGN];

    public readonly name = "assignment_operator";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        for (let tokenType of AssignmentOperator.firstSet){
           let node = check_rules([tokenType], tokenStream, this, parent);
           if (node){
               return node;
           }
        }
        return null;
    }

}
