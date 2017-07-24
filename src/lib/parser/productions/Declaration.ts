/**
 * rule:
 * declaration
 *     <declaration_specifiers> ;
 *     <declaration_specifiers> <init_declarator_list> ;
 */
import {ASTNode, check_rules, NonTerminal, ParsedToken, ParsingErrorTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {Token, TokenType} from "../../lexer/Lexer";
import {DeclarationSpecifiers} from "./DeclarationSpecifiers";
import {InitDeclaratorList} from "./InitDeclaratorList";

export class Declaration implements IProductionRule {

    public static readonly firstSet = [TokenType.TYPEDEF, TokenType.EXTERN, TokenType.STATIC, TokenType.AUTO, TokenType.REGISTER, TokenType.VOID, TokenType.CHAR, TokenType.SHORT, TokenType.INT, TokenType.LONG, TokenType.FLOAT, TokenType.DOUBLE, TokenType.SIGNED, TokenType.UNSIGNED, TokenType.BOOL, TokenType.COMPLEX, TokenType.IMAGINARY, TokenType.STRUCT, TokenType.UNION, TokenType.ENUM, TokenType.TYPE_NAME, TokenType.CONST, TokenType.RESTRICT, TokenType.VOLATILE, TokenType.INLINE];

    public readonly name = "declaration";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {
        let result =  check_rules([new DeclarationSpecifiers(), new InitDeclaratorList()], tokenStream, this, parent)
        if (!result){
            result = check_rules([new DeclarationSpecifiers(), ";"], tokenStream , this, parent);
        }
        else{
            if (tokenStream.checkFirst(";")) {
                result.addChild(new Terminal(tokenStream.nextToken()));
            }
            else {
                let fakeToken = new ParsedToken(new Token(";", ";", tokenStream.currentToken().line, tokenStream.currentToken().offset + tokenStream.currentToken().text.length));
                let error = new ParsingErrorTerminal([fakeToken]);
                error.expected = true;
                result.addChild(error);
            }
        }
        return result;
    }

}
