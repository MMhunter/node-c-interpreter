/**
 * rule:
 * struct_declarator_list
 *     <struct_declarator> <struct_declarator_list_tail>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {StructDeclarator} from "./StructDeclarator";
import {StructDeclaratorListTail} from "./StructDeclaratorListTail";

export class StructDeclaratorList implements IProductionRule {

    public static readonly firstSet = ["*", TokenType.IDENTIFIER, ":"];

    public readonly name = "struct_declarator_list";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new StructDeclarator(), new StructDeclaratorListTail()], tokenStream, this, parent);
    }

}
