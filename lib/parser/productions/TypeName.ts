/**
 * rule:
 * type_name
 *     <specifier_qualifier_list>
 *     <specifier_qualifier_list> <abstract_declarator>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {SpecifierQualifierList} from "./SpecifierQualifierList";
import {AbstractDeclarator} from "./AbstractDeclarator";

export class TypeName implements IProductionRule {

    public static readonly firstSet = [TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE];

    public readonly name = "type_name";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new SpecifierQualifierList()], tokenStream, this, parent) || check_rules([new SpecifierQualifierList(), new AbstractDeclarator()], tokenStream, this, parent);
    }

}
