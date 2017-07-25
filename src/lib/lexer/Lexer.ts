/**
 * Created by mmhunter on 08/07/2017.
 */

export class Lexer {

    public srcText: string;

    public tokens: Token[] = [];

    public supportTokens = []; // comments

    public errors = [];

    private currentIndex = -1;

    private currentLine: number = 0;

    private currentOffset = -1;

    constructor(text: string) {
        this.srcText = text;
        this.lex();
    }

    public nextChar(count: number = 1) {

        this.currentIndex += count;
        this.currentOffset += count;
        return this.srcText[this.currentIndex];
    }

    public lex(): Token[] {
        let currentChar: string;
        while (currentChar = this.nextChar()) {
            if (currentChar === " ") {
                continue;
            }
            else if (currentChar === "\n") {
                this.currentLine++;
                this.currentOffset = -1;
            }
            else if (currentChar === "#") {
                // ignore macros
                while (this.lookAhead() && this.lookAhead() !== "\n") {
                    this.nextChar();
                }
            }
            else if (this.isIdentifierStart(currentChar)) {
                // Identifiers
                let start = this.currentIndex;
                let offset = this.currentOffset;
                while (this.isIdentifierFollow(this.lookAhead())) {
                    this.nextChar();
                }
                let text = this.srcText.substr(start, this.currentIndex - start + 1);
                let type: TokenType | string = TokenType.IDENTIFIER;

                // check if it is keywords
                if (keywords.hasOwnProperty(text)) {
                    type = keywords[text];
                }

                this.tokens.push(new Token(text, type, this.currentLine, offset));
            }
            else if (this.isDecNumber(currentChar) || currentChar === "." && this.isDecNumber(this.lookAhead())) {
                // Constants
                let value: number;
                let offset = this.currentOffset;
                let start = this.currentIndex;
                if (currentChar !== "0" || this.hasDot()) {
                    // dec
                    value = 0;
                    if (currentChar !== ".") {
                        value = currentChar.charCodeAt(0) - "0".charCodeAt(0);
                        while (this.lookAhead() !== "." && this.isDecNumber(this.lookAhead())) {
                            value = value * 10 + (this.lookAhead().charCodeAt(0) - "0".charCodeAt(0));
                            this.nextChar();
                        }
                    }
                    if (this.lookAhead() === "." || currentChar === "." ) {
                        if (this.lookAhead() === ".") {
                            this.nextChar();
                        }
                        let decimalPart = 0;
                        let divedBy = 1;
                        while (this.isDecNumber(this.lookAhead())) {
                            decimalPart = decimalPart * 10 + this.lookAhead().charCodeAt(0) - "0".charCodeAt(0);
                            divedBy *= 10;
                            this.nextChar();
                        }
                        value = value + decimalPart / divedBy;

                        if (this.lookAhead() === "e" || this.lookAhead() === "E" &&
                            (
                                ((this.lookAhead(2) === "+" || this.lookAhead(2) === "-") && this.isDecNumber(this.lookAhead(3))) ||
                                this.isDecNumber(this.lookAhead(2))
                            )) {
                            // exponential part
                            this.nextChar();
                            let flag = 1;
                            if (this.lookAhead() === "+") {
                                flag = 1;
                                this.nextChar();
                            } else if (currentChar === "-") {
                                flag = -1;
                                this.nextChar();
                            }
                            let exp = 0;
                            while (this.isDecNumber(this.lookAhead())) {
                                exp = exp * 10 + this.lookAhead().charCodeAt(0) - "0".charCodeAt(0);
                                this.nextChar();
                            }
                            exp *= flag;
                            value = parseFloat((Math.pow(10, exp) * value).toFixed(10));
                        }
                        if (this.isFloatEnd(this.lookAhead()) || this.isDoubleEnd(this.lookAhead())) {
                            this.nextChar();
                        }
                    }
                } else {
                    value = 0;

                    if (this.lookAhead() === "x" || this.lookAhead()  === "X") {
                        // hex
                        this.nextChar();
                        while (this.isHexNumber(this.lookAhead())) {
                            let next = this.nextChar();
                            value = value * 16 + (next.charCodeAt(0) & 15) + (next.charCodeAt(0) >= "A".charCodeAt(0) ? 9 : 0);
                        }

                    } else {
                        // oct
                        while (this.isOctNumber(this.lookAhead())) {
                            let next = this.nextChar();
                            value = value * 8 + (next.charCodeAt(0) - "0".charCodeAt(0));
                        }
                    }
                }
                let isValidNumber = true;
                while (this.isIdentifierFollow(this.lookAhead())) {
                    this.nextChar();
                    isValidNumber = false;
                }
                let text = this.srcText.substr(start, this.currentIndex - start + 1);
                if ( isValidNumber ) {

                    this.tokens.push(new Token(text, TokenType.CONSTANT, this.currentLine, offset, value));
                } else {
                    this.errors.push(new LexError(text, "Invalid Number Syntax", this.currentLine, offset, value));
                }
            }
            else if (currentChar === "\"" || currentChar === "'") {
                let start = this.currentIndex;
                let offset = this.currentOffset;
                let startChar = currentChar;
                let value = "";
                while (this.lookAhead() && (this.lookAhead() !== startChar && this.lookAhead() !== "\n")){
                    value += this.readNextStringChar();
                }
                if (this.lookAhead() !== "\n") {
                    this.nextChar();
                }
                let text = this.srcText.substr(start, this.currentIndex - start + 1);
                this.tokens.push(new Token(text, TokenType.STRING_LITERAL, this.currentLine, offset, value));
            }
            else if (currentChar === "/" && this.lookAhead() === "/") {
                // inline comment
                let start = this.currentIndex;
                let offset = this.currentOffset;
                this.nextChar();
                let value = "";
                while (this.lookAhead() && this.lookAhead() !== "\n") {
                    value += this.lookAhead();
                    this.nextChar();
                }
                let text = this.srcText.substr(start, this.currentIndex - start + 1);
                this.supportTokens.push(new Token(text, TokenType.COMMENT, this.currentLine, offset, value));
            }
            else if (currentChar === "/" && this.lookAhead() === "*") {
                // block comment
                let start = this.currentIndex;
                let offset = this.currentOffset;
                let startLine = this.currentLine;
                this.nextChar(1);
                let value = "";
                while (this.lookAhead() && !(this.lookAhead() === "*" && this.lookAhead(2) === "/") ) {
                    if (this.currentChar() === "\n") {
                        this.currentLine++;
                        this.currentOffset = -1;
                    }
                    value += this.lookAhead();
                    this.nextChar();
                }
                if (this.currentChar() === "\n") {
                    this.currentLine++;
                    this.currentOffset = -1;
                }
                this.nextChar(2);
                let text = this.srcText.substr(start, this.currentIndex - start + 1);
                this.supportTokens.push(new Token(text, TokenType.COMMENT, startLine, offset, value));
            }
            else {
                let isSymbol = false;
                for (let i = 3 ; i > 0; i--){
                    if (symbols.hasOwnProperty(this.lookAheadString(i))) {
                        let text = this.lookAheadString(i);
                        this.tokens.push(new Token(text, symbols[text], this.currentLine, this.currentOffset));
                        this.nextChar(i - 1);
                        isSymbol = true;
                        break;
                    }
                }
                if (isSymbol) {
                    continue;
                }
                // unknown token
                this.errors.push(new LexError(currentChar, "Unkown symbol syntax", this.currentLine, this.currentOffset));
            }
        }
        return this.tokens;
    }

    private isIdentifierStart(char: string) {
        return (char >= "a" && char <= "z")
            || (char >= "A" && char <= "Z")
            || (char === "_")
            || (/[\u4e00-\u9fa5]/.test(char));
    }

    private isIdentifierFollow(char: string) {
        return (char >= "a" && char <= "z")
            || (char >= "A" && char <= "Z")
            || (char >= "0" && char <= "9")
            || (char === "_")
            || (/[\u4e00-\u9fa5]/.test(char));
    }

    private isDecNumber(char: string) {
        return (char >= "0" && char <= "9");
    }

    private isOctNumber(char: string) {
        return (char >= "0" && char <= "7");
    }

    private isFloatEnd(char: string) {
        return char === "F" || char === "f";
    }

    private isDoubleEnd(char: string) {
        return char === "l" || char === "L";
    }

    private isHexNumber(char: string) {
        return this.isDecNumber(char) || (char >= "A" && char <= "F") || (char >= "a" && char <= "f");
    }

    private lookAhead(k: number = 1) {
        return this.srcText[this.currentIndex + k];
    }

    private lookAheadString(length: number) {
        return this.srcText.substr(this.currentIndex, length);
    }

    private hasDot() {
        let k = 1;
        while (this.lookAhead(k) && this.isDecNumber(this.lookAhead(k))) {
            k ++;
        }
        return this.lookAhead(k) === ".";
    }

    private isWhiteSpace(char): boolean {
        return (char === " " || char === "\n" || char === "\t");
    }

    private isSymbol(char): boolean {
        return symbols.hasOwnProperty(char);
    }

    private currentChar(): string {
        return this.srcText[this.currentIndex];
    }

    private readNextStringChar(): string {
        if (this.lookAhead() === "\\"){
            // escape start
            this.nextChar();
            if (this.lookAhead() === "u") {
                this.nextChar();
                let hex = this.srcText.substring(this.currentIndex + 1, this.currentIndex + 5);
                if (!hex.match(/[\da-f]{4}/i)) {
                    // TODO: add error;
                    return "";
                }
                else{
                    this.nextChar(4);
                    return String.fromCharCode(parseInt(hex, 16));
                }

            }
            else {
                this.nextChar();
                return ESCAPE[this.currentChar()] || this.currentChar();

            }
        }
        else {
            this.nextChar();
            return this.currentChar();
        }
    }

}

export class Token {

    public readonly text: string;

    /**
     *  lin number, start from 0.
     */
    public readonly line: number;

    /**
     *  column number, start from 0.
     */
    public readonly offset: number;

    public readonly type: TokenType | string;

    public readonly value: any;

    constructor(text, type, line, offset, value?) {
        this.text = text;
        this.type = type;
        this.line = line;
        this.offset = offset;
        this.value = value;
    }

}

export class LexError {
    public readonly text: string;

    /**
     *  lin number, start from 0.
     */
    public readonly line: number;

    /**
     *  column number, start from 0.
     */
    public readonly offset: number;

    public readonly value: any;

    public readonly message: string;

    constructor(text, message, line, offset, value?) {
        this.text = text;
        this.message = message;
        this.line = line;
        this.offset = offset;
        this.value = value;
    }
}

export enum TokenType {

    IDENTIFIER,
    STRING_LITERAL,
    CONSTANT,
        // keywords
    AUTO,
    BOOL,
    BREAK,
    CASE,
    CHAR,
    COMPLEX,
    CONST,
    CONTINUE,
    DEFAULT,
    DO,
    DOUBLE,
    ELSE,
    ENUM,
    EXTERN,
    FLOAT,
    FOR,
    GOTO,
    IF,
    IMAGINARY,
    INLINE,
    INT,
    LONG,
    REGISTER,
    RESTRICT,
    RETURN,
    SHORT,
    SIGNED,
    SIZEOF,
    STATIC,
    STRUCT,
    SWITCH,
    TYPEDEF,
    UNION,
    UNSIGNED,
    VOID,
    VOLATILE,
    WHILE,

        // symbols
    ELLIPSIS,
    RIGHT_ASSIGN,
    LEFT_ASSIGN,
    ADD_ASSIGN,
    SUB_ASSIGN,
    MUL_ASSIGN,
    DIV_ASSIGN,
    MOD_ASSIGN,
    AND_ASSIGN,
    XOR_ASSIGN,
    OR_ASSIGN,
    RIGHT_OP,
    LEFT_OP,
    INC_OP,
    DEC_OP,
    PTR_OP,
    AND_OP,
    OR_OP,
    LE_OP,
    GE_OP,
    EQ_OP,
    NE_OP,

    COMMENT,

    TYPE_NAME, // used in parser
}

export const keywords = {
    "auto": TokenType.AUTO,
    "_Bool": TokenType.BOOL,
    "break": TokenType.BREAK,
    "case": TokenType.CASE,
    "char": TokenType.CHAR,
    "_Complex": TokenType.COMPLEX,
    "const": TokenType.CONST,
    "continue": TokenType.CONTINUE,
    "default": TokenType.DEFAULT,
    "do": TokenType.DO,
    "double": TokenType.DOUBLE,
    "else": TokenType.ELSE,
    "enum": TokenType.ENUM,
    "extern": TokenType.EXTERN,
    "float": TokenType.FLOAT,
    "for": TokenType.FOR,
    "goto": TokenType.GOTO,
    "if": TokenType.IF,
    "_Imaginary": TokenType.IMAGINARY,
    "inline": TokenType.INLINE,
    "int": TokenType.INT,
    "long": TokenType.LONG,
    "register": TokenType.REGISTER,
    "restrict": TokenType.RESTRICT,
    "return": TokenType.RETURN,
    "short": TokenType.SHORT,
    "signed": TokenType.SIGNED,
    "sizeof": TokenType.SIZEOF,
    "static": TokenType.STATIC,
    "struct": TokenType.STRUCT,
    "switch": TokenType.SWITCH,
    "typedef": TokenType.TYPEDEF,
    "union": TokenType.UNION,
    "unsigned": TokenType.UNSIGNED,
    "void": TokenType.VOID,
    "volatile": TokenType.VOLATILE,
    "while": TokenType.WHILE,
};

export const symbols = {
    "...": TokenType.ELLIPSIS,
    ">>=": TokenType.RIGHT_ASSIGN,
    "<<=": TokenType.LEFT_ASSIGN,
    "+=": TokenType.ADD_ASSIGN,
    "-=": TokenType.SUB_ASSIGN,
    "*=": TokenType.MUL_ASSIGN,
    "/=": TokenType.DIV_ASSIGN,
    "%=": TokenType.MOD_ASSIGN,
    "&=": TokenType.AND_ASSIGN,
    "^=": TokenType.XOR_ASSIGN,
    "|=": TokenType.OR_ASSIGN,
    ">>": TokenType.RIGHT_OP,
    "<<": TokenType.LEFT_OP,
    "++": TokenType.INC_OP,
    "--": TokenType.DEC_OP,
    "->": TokenType.PTR_OP,
    "&&": TokenType.AND_OP,
    "||": TokenType.OR_OP,
    "<=": TokenType.LE_OP,
    ">=": TokenType.GE_OP,
    "==": TokenType.EQ_OP,
    "!=": TokenType.NE_OP,
    ";": ";",
    "{": "{",
    "}": "}",
    ",": ",",
    ":": ":",
    "=": "=",
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    ".": ".",
    "&": "&",
    "!": "!",
    "~": "~",
    "-": "-",
    "+": "+",
    "*": "*",
    "/": "/",
    "%": "%",
    "<": "<",
    ">": ">",
    "^": "^",
    "|": "|",
    "?": "?",
};

const ESCAPE = {"n": "\n", "f": "\f", "r": "\r", "t": "\t", "v": "\v", "\"": "\"", "'": "'"};
