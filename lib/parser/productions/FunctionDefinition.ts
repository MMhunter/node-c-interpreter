/**
 * rule:
 * function_definition
 *     <declaration_specifiers> <declarator> <declaration_list> <compound_statement>
 *     <declaration_specifiers> <declarator> <compound_statement>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {DeclarationSpecifiers} from "./DeclarationSpecifiers";
import {Declarator} from "./Declarator";
import {DeclarationList} from "./DeclarationList";
import {CompoundStatement} from "./CompoundStatement";

export class FunctionDefinition implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "function_definition";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(DeclarationSpecifiers.firstSet)){
            return check_rules([new DeclarationSpecifiers(), new Declarator(), new DeclarationList(), new CompoundStatement()], tokenStream, this, parent)
                || check_rules([new DeclarationSpecifiers(), new Declarator(), new CompoundStatement()], tokenStream, this, parent);
        }
        return null;
    }

}
