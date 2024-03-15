/**
 * A namespace containing types relating to various alpha-numeric tokens.
 * @version 0.1.0
 */
export namespace Tokens {

    /**
     * A type that encapsulates all 26 lowercase letters of the English alphabet.
     * @version 0.1.0
     */
    export type Letter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

    /**
     * A Type that encapsulates all 26 uppercase letters of the English alphabet.
     * @version 0.1.0
     */
    export type UppercaseLetter = Uppercase<Letter>;
    
    /**
     * A type that encapsulates all single-digit numerals (0-9).
     * @version 0.1.0
     */
    export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

    export type Symbol = "!" | "\"" | "#" | "$" | "%" | "&" | "'" | "(" | ")" | "*" | "+" | "," | "-" | "." | "/" | ":" | ";" | "<" | "=" | ">" | "?" | "@" | "[" | "\\" | "]" | "^" | "_" | "{" | "|" | "}" | "~";
 
}