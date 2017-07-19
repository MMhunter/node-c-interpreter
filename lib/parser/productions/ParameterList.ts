/**
 * rule:
 * parameter_list
 *     <parameter_declaration> <parameter_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {ParameterDeclaration} from "./ParameterDeclaration";
import {ParameterListTail} from "./ParameterListTail";

export class ParameterList implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "parameter_list";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new ParameterDeclaration(), new ParameterListTail()], tokenStream, this, parent);
    }

}
