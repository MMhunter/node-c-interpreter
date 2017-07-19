/**
 * rule:
 * struct_or_union
 *     STRUCT
 *     UNION
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class StructOrUnion implements IProductionRule {

    public static readonly firstSet = [TokenType.STRUCT, TokenType.UNION];

    public readonly name = "struct_or_union";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        return check_rules([TokenType.STRUCT], tokenStream, this, parent) || check_rules([TokenType.UNION], tokenStream, this, parent);
    }

}
