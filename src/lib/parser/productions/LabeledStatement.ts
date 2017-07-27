/**
 * rule:
 * labeled_statement
 *     IDENTIFIER : <block_item>
 *     CASE <constant_expression> : <block_item>
 *     DEFAULT : <block_item>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Statement} from "./Statement";
import {ConstantExpression} from "./ConstantExpression";
import {BlockItem} from "./BlockItem";

export class LabeledStatement implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CASE, TokenType.DEFAULT];

    public readonly name = "labeled_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(TokenType.IDENTIFIER)){
           return check_rules([TokenType.IDENTIFIER, ":", new BlockItem()], tokenStream, this, parent);
        }
        else if (tokenStream.checkFirst(TokenType.CASE)){
            return check_rules([TokenType.CASE, new ConstantExpression(), ":", new BlockItem()], tokenStream, this, parent);
        }
        else if (tokenStream.checkFirst(TokenType.DEFAULT)){
            return check_rules([TokenType.DEFAULT, ":", new BlockItem()], tokenStream, this, parent);
        }
        return null;
    }

}
