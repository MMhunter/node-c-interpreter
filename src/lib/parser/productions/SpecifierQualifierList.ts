/**
 * rule:
 * specifier_qualifier_list
 *     <type_specifier> <specifier_qualifier_list>
 *     <type_specifier>
 *     <type_qualifier> <specifier_qualifier_list>
 *     <type_qualifier>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {TypeSpecifier} from "./TypeSpecifier";
import {TypeQualifier} from "./TypeQualifier";

export class SpecifierQualifierList implements IProductionRule {

    public static readonly firstSet = [TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE];

    public readonly name = "specifier_qualifier_list";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new TypeSpecifier(), new SpecifierQualifierList()], tokenStream, this, parent)
            || check_rules([new TypeSpecifier()], tokenStream, this, parent)
            || check_rules([new TypeQualifier(), new SpecifierQualifierList()], tokenStream, this, parent)
            || check_rules([new TypeQualifier()], tokenStream, this, parent);
    }

}
