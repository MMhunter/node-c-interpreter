/**
 * rule:
 * designator
 *     [ <constant_expression> ]
 *     . IDENTIFIER
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ConstantExpression} from "./ConstantExpression";

export class Designator implements IProductionRule {

    public static readonly firstSet = ["[", "."];

    public readonly name = "designator";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst("[")){
            return check_rules(["[", new ConstantExpression(), "]"], tokenStream, this, parent);
        }else if (tokenStream.checkFirst(".")){
            return check_rules([".", TokenType.IDENTIFIER], tokenStream, this, parent);
        }
        return null;
    }

}
