/**
 * rule:
 * type_qualifier_list
 *     <type_qualifier> <type_qualifier_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {TypeQualifier} from "./TypeQualifier";
import {TypeQualifierListTail} from "./TypeQualifierListTail";

export class TypeQualifierList implements IProductionRule {

    public static readonly firstSet = [TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE];

    public readonly name = "type_qualifier_list";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new TypeQualifier(), new TypeQualifierListTail()], tokenStream, this, parent);
    }

}
