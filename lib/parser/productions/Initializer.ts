/**
 * rule:
 * initializer
 *     <assignment_expression>
 *     { <initializer_list> }
 *     { <initializer_list> , }
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {AssignmentExpression} from "./AssignmentExpression";
import {InitializerList} from "./InitializerList";

export class Initializer implements IProductionRule {

    public static readonly firstSet = [TokenType.IDENTIFIER, TokenType.CONSTANT, TokenType.STRING_LITERAL, "(", TokenType.INC_OP, TokenType.DEC_OP, "&", "*", "+", "-", "~", "!", TokenType.SIZEOF, "{"];

    public readonly name = "initializer";

    public apply(tokenStream: TokenStream): ASTNode {
        if (tokenStream.checkFirst("<")){
            return check_rules(["<", new　AssignmentExpression(), ">"], tokenStream, this);
        }
        else if (tokenStream.checkFirst("{")){
            return check_rules(["{", new InitializerList(), ",", "}"], tokenStream, this)
                || check_rules(["{", new InitializerList(), "}"], tokenStream, this);
        }
        return null;
    }

}
