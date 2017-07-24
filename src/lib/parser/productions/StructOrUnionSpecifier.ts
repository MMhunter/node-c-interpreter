/**
 * rule:
 * struct_or_union_specifier
 *     <struct_or_union> IDENTIFIER { <struct_declaration_list> }
 *     <struct_or_union> { <struct_declaration_list> }
 *     <struct_or_union> IDENTIFIER
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {StructOrUnion} from "./StructOrUnion";
import {StructDeclarationList} from "./StructDeclarationList";

export class StructOrUnionSpecifier implements IProductionRule {

    public static readonly firstSet = [TokenType.STRUCT, TokenType.UNION];

    public readonly name = "struct_or_union_specifier";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {

        if (tokenStream.checkFirst(StructOrUnion.firstSet) && tokenStream.lookAhead(2) && tokenStream.lookAhead(2).type === "{"){
            return check_rules([new StructOrUnion(), "{", new StructDeclarationList(), "}"], tokenStream, this, parent);
        }
        else{
            let result = check_rules([new StructOrUnion(), TokenType.IDENTIFIER, "{", new StructDeclarationList(), "}"], tokenStream, this, parent) || check_rules([new StructOrUnion(), TokenType.IDENTIFIER], tokenStream, this, parent);
            if (result){
                let type_name_token = (result.children[1] as Terminal).token;
                for (let i = tokenStream.currentIndex(); i < tokenStream.tokens.length; i++){
                    let token = tokenStream.tokens[i];
                    if (token.type === TokenType.IDENTIFIER && token.text === type_name_token.text){
                        token.couldBeUsedAsTypeName = true;
                    }
                }
            }

            return result;
        }

    }

}
