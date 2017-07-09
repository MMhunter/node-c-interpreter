declare module 'node-c-interpreter/lib/Lexer' {
	/**
	 * Created by mmhunter on 08/07/2017.
	 */
	export class Lexer {
	    srcText: string;
	    tokens: Token[];
	    errors: any[];
	    private currentIndex;
	    private currentLine;
	    private currentOffset;
	    private supportTokens;
	    constructor(text: string);
	    nextChar(count?: number): string;
	    lex(): Token[];
	    private isIdentifierStart(char);
	    private isIdentifierFollow(char);
	    private isDecNumber(char);
	    private isOctNumber(char);
	    private isFloatEnd(char);
	    private isDoubleEnd(char);
	    private isHexNumber(char);
	    private lookAhead(k?);
	    private lookAheadString(length);
	    private hasDot();
	    private isWhiteSpace(char);
	    private isSymbol(char);
	    private currentChar();
	    private readNextStringChar();
	}
	export class Token {
	    readonly text: string;
	    /**
	     *  lin number, start from 0.
	     */
	    readonly line: number;
	    /**
	     *  column number, start from 0.
	     */
	    readonly offset: number;
	    readonly type: TokenType | string;
	    readonly value: any;
	    constructor(text: any, type: any, line: any, offset: any, value?: any);
	}
	export class LexError {
	    readonly text: string;
	    /**
	     *  lin number, start from 0.
	     */
	    readonly line: number;
	    /**
	     *  column number, start from 0.
	     */
	    readonly offset: number;
	    readonly value: any;
	    readonly message: string;
	    constructor(text: any, message: any, line: any, offset: any, value?: any);
	}
	export enum TokenType {
	    IDENTIFIER = 0,
	    STRING_LITERAL = 1,
	    CONSTANT = 2,
	    AUTO = 3,
	    BOOL = 4,
	    BREAK = 5,
	    CASE = 6,
	    CHAR = 7,
	    COMPLEX = 8,
	    CONST = 9,
	    CONTINUE = 10,
	    DEFAULT = 11,
	    DO = 12,
	    DOUBLE = 13,
	    ELSE = 14,
	    ENUM = 15,
	    EXTERN = 16,
	    FLOAT = 17,
	    FOR = 18,
	    GOTO = 19,
	    IF = 20,
	    IMAGINARY = 21,
	    INLINE = 22,
	    INT = 23,
	    LONG = 24,
	    REGISTER = 25,
	    RESTRICT = 26,
	    RETURN = 27,
	    SHORT = 28,
	    SIGNED = 29,
	    SIZEOF = 30,
	    STATIC = 31,
	    STRUCT = 32,
	    SWITCH = 33,
	    TYPEDEF = 34,
	    UNION = 35,
	    UNSIGNED = 36,
	    VOID = 37,
	    VOLATILE = 38,
	    WHILE = 39,
	    ELLIPSIS = 40,
	    RIGHT_ASSIGN = 41,
	    LEFT_ASSIGN = 42,
	    ADD_ASSIGN = 43,
	    SUB_ASSIGN = 44,
	    MUL_ASSIGN = 45,
	    DIV_ASSIGN = 46,
	    MOD_ASSIGN = 47,
	    AND_ASSIGN = 48,
	    XOR_ASSIGN = 49,
	    OR_ASSIGN = 50,
	    RIGHT_OP = 51,
	    LEFT_OP = 52,
	    INC_OP = 53,
	    DEC_OP = 54,
	    PTR_OP = 55,
	    AND_OP = 56,
	    OR_OP = 57,
	    LE_OP = 58,
	    GE_OP = 59,
	    EQ_OP = 60,
	    NE_OP = 61,
	    COMMENT = 62,
	}
	export const keywords: {
	    "auto": TokenType;
	    "_Bool": TokenType;
	    "break": TokenType;
	    "case": TokenType;
	    "char": TokenType;
	    "_Complex": TokenType;
	    "const": TokenType;
	    "continue": TokenType;
	    "default": TokenType;
	    "do": TokenType;
	    "double": TokenType;
	    "else": TokenType;
	    "enum": TokenType;
	    "extern": TokenType;
	    "float": TokenType;
	    "for": TokenType;
	    "goto": TokenType;
	    "if": TokenType;
	    "_Imaginary": TokenType;
	    "inline": TokenType;
	    "int": TokenType;
	    "long": TokenType;
	    "register": TokenType;
	    "restrict": TokenType;
	    "return": TokenType;
	    "short": TokenType;
	    "signed": TokenType;
	    "sizeof": TokenType;
	    "static": TokenType;
	    "struct": TokenType;
	    "switch": TokenType;
	    "typedef": TokenType;
	    "union": TokenType;
	    "unsigned": TokenType;
	    "void": TokenType;
	    "volatile": TokenType;
	    "while": TokenType;
	};
	export const symbols: {
	    "...": TokenType;
	    ">>=": TokenType;
	    "<<=": TokenType;
	    "+=": TokenType;
	    "-=": TokenType;
	    "*=": TokenType;
	    "/=": TokenType;
	    "%=": TokenType;
	    "&=": TokenType;
	    "^=": TokenType;
	    "|=": TokenType;
	    ">>": TokenType;
	    "<<": TokenType;
	    "++": TokenType;
	    "--": TokenType;
	    "->": TokenType;
	    "&&": TokenType;
	    "||": TokenType;
	    "<=": TokenType;
	    ">=": TokenType;
	    "==": TokenType;
	    "!=": TokenType;
	    ";": string;
	    "{": string;
	    "}": string;
	    ",": string;
	    ": ": string;
	    "=": string;
	    "(": string;
	    ")": string;
	    "[": string;
	    "]": string;
	    ".": string;
	    "&": string;
	    "!": string;
	    "~": string;
	    "-": string;
	    "+": string;
	    "*": string;
	    "/": string;
	    "%": string;
	    "<": string;
	    ">": string;
	    "^": string;
	    "|": string;
	    "?": string;
	};

}
declare module 'node-c-interpreter/index' {
	import { Lexer, TokenType } from 'node-c-interpreter/lib/Lexer';
	/**
	 * Created by mmhunter on 08/07/2017.
	 */
	export const lexer: {
	    Lexer: typeof Lexer;
	    TokenType: typeof TokenType;
	};

}
