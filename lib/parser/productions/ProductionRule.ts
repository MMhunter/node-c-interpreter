import {ASTNode, NonTerminal, TokenStream} from "../Parser";
/**
 * @file ProductionRule.class.js
 *
 * Created by mmhunter on 11/07/2017.
 */

export interface IProductionRule {

    readonly name;

    apply(tokenStream: TokenStream, parent: NonTerminal): ASTNode;

}

