/**
 * rule:
 * type_qualifier_list_tail
 *     <type_qualifier> <type_qualifier_list_tail>
 *     <empty>
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {TypeQualifier} from "./TypeQualifier";

export class TypeQualifierListTail implements IProductionRule {

    public static readonly firstSet = null;

    public readonly name = "type_qualifier_list_tail";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([new TypeQualifier(), new TypeQualifierListTail()], tokenStream, this, parent)
            || check_rules([], tokenStream, this, parent);
    }

}
