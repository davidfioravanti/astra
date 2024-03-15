import { Tokens } from "./astra.tokens.interface";

/**
 * A namespace containing utility functions for generating random values.
 * @version 0.1.0
 */
export namespace Random {
    
    /**
     *     A variable containing an array of all 26 lowercase letters of the English 
     * alphabet. Used for random string generation.
     * @version 0.1.0
     */
    const _lettersArray : Array<Tokens.Letter> = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    /**
     *     A function that returns a random RGB color string (CSS format), where 
     * each color channel is an integer between 0 and 255.
     * @returns A random RBG color string.
     * @example `rgb(255, 255, 255)`
     * @version 0.1.0
     */
    export const colorRGB = () => {
        const r = Random.integer(0, 255);
        const g = Random.integer(0, 255);
        const b = Random.integer(0, 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    /**
     *     A function that returns a random RGBA color string (CSS format). The
     * red, green, and blue color channels are integer values between 0 and 255.
     * The alpha channel is a floating point number between 0 and 1 (inclusive).
     * @returns A random RBG color string.
     * @example `rgba(255, 255, 255, 0.3)`
     * @version 0.1.0
     */
    export const colorRGBA = (alpha: number = 1) => {
        const r = Random.integer(0, 255);
        const g = Random.integer(0, 255);
        const b = Random.integer(0, 255);
        const a = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    /**
     * A function that returns a random letter from the 26 letters of the English alphabet.
     * @returns A random lowercase letter.
     * @version 0.1.0
     */
    export const letter = () : Tokens.Letter => {
        return _lettersArray[Math.floor(Math.random() * 25)];
    }

    /**
     * A function that returns a random integer between the given minimum and maximum bounds.
     * @param min - The lower bound that the random integer will be confined to.
     * @param max - The upper bound that the random integer will be confied to.
     * @returns A random integer between the given minimum and maxium values.
     * @version 0.1.0
     */
    export const integer = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}