/**
 * rule:
 * struct_declarator
 *     <declarator>
 *     : <constant_expression>
 *     <declarator> : <constant_expression>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Declarator} from "./Declarator";
import {ConstantExpression} from "./ConstantExpression";

export class StructDeclarator implements IProductionRule {

    public static readonly firstSet = ["*", TokenType.IDENTIFIER, ":"];

    public readonly name = "struct_declarator";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new Declarator()], tokenStream, this, parent)
            || check_rules([":", new ConstantExpression()], tokenStream, this, parent)
            || check_rules([new Declarator(), ":", new ConstantExpression()], tokenStream, this, parent);
    }

}
