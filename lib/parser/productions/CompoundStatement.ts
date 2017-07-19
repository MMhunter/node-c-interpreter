/**
 * rule:
 * compound_statement
 *     { }
 *     { <block_item_list> }
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";
import {BlockItemList} from "./BlockItemList";

export class CompoundStatement implements IProductionRule {

    public static readonly firstSet = ["{"];

    public readonly name = "compound_statement";

    public apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode {

        if (tokenStream.checkFirst("{")){
            if (tokenStream.lookAhead(2) && tokenStream.lookAhead(2).type === "}"){
                return check_rules(["{", "}"], tokenStream, this, parent);
            }
            else{
                return check_rules(["{", new BlockItemList(), "}"], tokenStream, this, parent);
            }
        }


        return null;
    }

}
