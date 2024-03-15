/**
 * A namespace containing types relating to various alpha-numeric tokens.
 * @version 0.1.0
 */
export namespace Tokens {

    /**
     * An array that contains all 26 lowercase letters of the English alphabet.
     * @version 0.1.0
     */
    export const letters = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"] as const;

    /**
     * A type that encapsulates all 26 lowercase letters of the English alphabet.
     * @version 0.1.0
     */
    export type Letter = typeof letters[number];

    /**
     * A Type that encapsulates all 26 uppercase letters of the English alphabet.
     * @version 0.1.0
     */
    export type UppercaseLetter = Uppercase<Letter>;

    /**
     * An array that contains all single-digit numerals (0-9).
     * @version 0.1.0
     */
    export const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
    
    /**
     * A type that encapsulates all single-digit numerals (0-9).
     * @version 0.1.0
     */
    export type Digit = typeof digits[number];

    /**
     * An array that contains all standard keyboard symbols.
     * @version 0.1.0
     */
    export const symbols = ["!" , "\"" , "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "\\" , "]" , "^" , "_" , "{" , "," , "}" , "~"] as const;

    /**
     * A type that encapsulates all standard keyboard symbols.
     * @version 0.1.0
     */
    export type Symbol = typeof symbols[number];
 
}