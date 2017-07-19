/**
 * rule:
 * enum_specifier
 *     ENUM { <enumerator_list> }
 *     ENUM IDENTIFIER { <enumerator_list> }
 *     ENUM { <enumerator_list> , }
 *     ENUM IDENTIFIER { <enumerator_list> , }
 *     ENUM IDENTIFIER
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {EnumeratorList} from "./EnumeratorList";

export class EnumSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.ENUM];

    public readonly name = "enum_specifier";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        if (tokenStream.checkFirst(TokenType.ENUM)){
            if (tokenStream.lookAhead(2) && tokenStream.lookAhead(2).type === TokenType.IDENTIFIER){
                return check_rules([TokenType.ENUM, TokenType.IDENTIFIER, "{", new　EnumeratorList(), ",", "}"], tokenStream, this, parent)
                    || check_rules([TokenType.ENUM, TokenType.IDENTIFIER, "{", new EnumeratorList(), "}"], tokenStream, this, parent)
                    || check_rules([TokenType.ENUM, TokenType.IDENTIFIER], tokenStream, this, parent);
            }
            else if (tokenStream.lookAhead(2) && tokenStream.lookAhead(2).type === "{"){
                return check_rules([TokenType.ENUM, "{", new　EnumeratorList(), ",", "}"], tokenStream, this, parent)
                    || check_rules([TokenType.ENUM, "{", new EnumeratorList(), "}"], tokenStream, this, parent);

            }
        }
        return null;
    }

}
