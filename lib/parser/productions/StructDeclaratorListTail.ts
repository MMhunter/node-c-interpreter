/**
 * rule:
 * struct_declarator_list_tail
 *     , <struct_declarator> <struct_declarator_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {StructDeclarator} from "./StructDeclarator";

export class StructDeclaratorListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "struct_declarator_list_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([",", new StructDeclarator(), new StructDeclaratorListTail()], tokenStream, this, parent)
            || check_rules([], tokenStream, this, parent);
    }

}
