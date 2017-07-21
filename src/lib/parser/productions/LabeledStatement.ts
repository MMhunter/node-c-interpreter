/**
 * rule:
 * labeled_statement
 *     IDENTIFIER : <statement>
 *     CASE <constant_expression> : <statement>
 *     DEFAULT : <statement>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Statement} from "./Statement";
import {ConstantExpression} from "./ConstantExpression";

export class LabeledStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CASE, TokenType.DEFAULT];

    public readonly name = "labeled_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(TokenType.IDENTIFIER)){
           return check_rules([TokenType.IDENTIFIER, ":", new Statement()], tokenStream, this, parent);
        }
        else if (tokenStream.checkFirst(TokenType.CASE)){
            return check_rules([TokenType.CASE, new ConstantExpression(), ":", new Statement()], tokenStream, this, parent);
        }
        else if (tokenStream.checkFirst(TokenType.DEFAULT)){
            return check_rules([TokenType.DEFAULT, ":", new Statement()], tokenStream, this, parent);
        }
        return null;
    }

}
