/**
 * rule:
 * enumerator
 *     IDENTIFIER
 *     IDENTIFIER = <constant_expression>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ConstantExpression} from "./ConstantExpression";

export class Enumerator implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER];

    public readonly name = "enumerator";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(TokenType.IDENTIFIER)) {
            return check_rules([TokenType.IDENTIFIER, "=", new ConstantExpression()], tokenStream, this, parent)
                || check_rules([TokenType.IDENTIFIER], tokenStream, this, parent);
        }
        return null;
    }

}
