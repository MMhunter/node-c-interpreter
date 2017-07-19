/**
 * rule:
 * ${rule}
 */
import {ASTNode, check_rules, NonTerminal, Terminal, TokenStream} from "../Parser";
import {IProductionRule} from "./ProductionRule";
import {TokenType} from "../../lexer/Lexer";

export class ${CAMEL_NAME} implements IProductionRule {

    public readonly firstSet = ${firstSet};

    public readonly name = "${NAME}";

    public apply(tokenStream: TokenStream): ASTNode {
        return ${RETURN};
    }

}
