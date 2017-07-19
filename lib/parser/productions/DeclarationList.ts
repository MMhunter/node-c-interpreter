/**
 * rule:
 * declaration_list
 *     <declaration> <declaration_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {Declaration} from "./Declaration";
import {DeclarationListTail} from "./DeclarationListTail";

export class DeclarationList implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "declaration_list";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if ( tokenStream.checkFirst(Declaration.firstSet)){
            return check_rules([new Declaration(), new DeclarationListTail()], tokenStream, this, parent);
        }
        return null;
    }

}
