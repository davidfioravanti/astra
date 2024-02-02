// * ===========================================================================
// * Formatting Namespace
// * ===========================================================================

/**
 *     A namespace containing utility functions and data structures
 * that are used for formatting various data types.
 * @version 0.1.0 
 */
export namespace Formatting {

    // * ===========================================================================
    // * ANSI Formatting
    // * ===========================================================================

    /**
     *     A namespace containing utility functions and data structures 
     * used for working with ANSI escape codes.
     * @version 0.1.0
     */
    export namespace ANSI {

        // * ===========================================================================
        // * ANSI Formatting - Data Structures
        // * ===========================================================================

        /**
         *     An enum whose members contain ANSI escape codes that modify
         * the color of text.
         * @version 0.1.0
         */
        export enum Color {
            /**
             * The ANSI escape code for black foreground text.
             * @version 0.1.0
             */
            Black = "\u001b[30m",
            /**
             * The ANSI escape code for blue foreground text.
             * @version 0.1.0
             */
            Blue = "\u001b[34m",
            /**
             * The ANSI escape code for cyan foreground text.
             * @version 0.1.0
             */
            Cyan = "\u001b[36m",
            /**
             * The ANSI escape code for green foreground text.
             * @version 0.1.0
             */
            Green = "\u001b[32m",
            /**
             * The ANSI escape code for magenta foreground text.
             * @version 0.1.0
             */
            Magenta = "\u001b[35m",
            /**
             * The ANSI escape code for red foreground text.
             */
            Red = "\u001b[31m",
            /**
             * The ANSI escape code for white foreground text.
             * @version 0.1.0
             */
            White = "\u001b[37m",
            /**
             * The ANSI escape code for yellow foreground text.
             * @version 0.1.0
             */
            Yellow = "\u001b[33m",
        }

        /**
         *     An enum whose members contain ANSI escape codes that
         * modify the style of text including style resets.
         */
        export enum Style {
            /**
             * The ANSI escape code for bold text.
             * @version 0.1.0
             */
            Bold = "\u001b[1m",
            /**
             * The ANSI escape code for italic text.
             * @version 0.1.0
             */
            Italic = "\u001b[3m",
            /**
             * The ANSI escape code for resetting text style and color.
             * @version 0.1.0
             */
            Reset = "\u001b[0m",
            /**
             * The ANSI escape code for underlined text.
             * @version 0.1.0
             */
            Underline = "\u001b[4m",
        }

    }

    // * ===========================================================================
    // * Time Formatting
    // * ===========================================================================

    /**
     *     A namespace containing utility functions and data structures
     * related to time formatting and conversion.
     * @version 0.1.0
     */
    export namespace Time {

    }

    // * ===========================================================================
    // * String Formatting
    // * ===========================================================================

    /**
     *     A namespace containing utility functions and data structures
     * that are related to formatting strings.
     * @version 0.1.0
     */
    export namespace String {

        // * ===========================================================================
        // * String Formatting - Data Structures
        // * ===========================================================================

        /**
         * An enum used to denote the particular case of a string.
         * @version 0.1.0
         */
        export enum Case {
            /** 
             * An enum member that denotes a camel-cased string. 
             * @version 0.1.0
             * */
            Camel = "camel",
            /** 
             * An enum member that denotes a pascal-cased string. 
             * @version 0.1.0
             * */
            Pascal = "pascal",
            /**
             * An enum member that denotes a snake-cased string.
             * @version 0.1.0
             */
            Snake = "snake",
            /**
             * An enum member that denotes a kebab-cased string.
             * @version 0.1.0
             */
            Kebab = "kebab",
        }

        // * ===========================================================================
        // * String Formatting - Functions
        // * ===========================================================================

        /**
         * A function that splits a string into an array based on it's case.
         * @param str - The string that will be split into a case-specific array.
         * @returns An array containing the elements of the split string.
         * @version 0.1.0
         */
        export function toArray(str: string) : Array<string> {
            // ===========================================================================
            // Create variables that test the given string for specific cases.
            // ===========================================================================
            const isKebabCase : boolean = str.split("-").length > 1;
            const isSnakeCase : boolean = str.split("_").length > 1;
            const isCamelOrPascalCase : boolean = str.split(" ").length === 1;
            // ===========================================================================
            // Return the appropriately split string array based on the identified case.
            // ===========================================================================
            if (isKebabCase) {
                return str.split("-");
            } else if (isSnakeCase) {
                return str.split("_");
            } else if (isCamelOrPascalCase) {
                // ===========================================================================
                // - Add spaces between capture groups.
                // - Split the string into an array.
                // - Remove array indicies with empty strings.
                // ===========================================================================
                return str
                    .replace(/([A-Z]+)/g, " $1")
                    .replace(/([A-Z][a-z])/g, " $1")
                    .split(" ")
                    .filter((s) => {
                        return s != "" 
                    });
            } else {
                return str.split(" ");
            }
        }

        /**
         * A function that converts a given string to kebab case.
         * @param str - The string that will be converted to kebab case.
         * @returns The kebab case version of the given string.
         * @version 0.1.0
         */
        export function toKebabCase (str: string) : string {
            // ===========================================================================
            // - Add hypens before uppercase letters to account for camel/pascal case.
            // - Convert and spaces or underscores to hyphens.
            // - Convert the resulting string to lower case.
            // ===========================================================================
            return str
                .replace(/([A-Z]([a-z]))/g, "$1-$2")
                .replace(/[\s_]+/g, '-')
                .toLowerCase();
        }

        /**
         * @param str - The string that will be converted to title case (e.g. 
         * This is Title Case).
         * @param options - An optional parameter containing settings that affect
         * the formatting of the given string. Allows for exclusions.
         * @param exclusions - An option parameter that allows you to exclude certain
         * substrings from title case conversion.
         * @returns The title case version of the given string.
         * @version 0.1.0
         */
        export function toTitleCase(
            str: string,
            exclusions?: Array<string>
        ){
            // Convert the string to a character array and iterate over it's characters.
            const titleCaseArr = [...str].map((substr) => {
                const normalizedSubstr = substr.toLowerCase();
                // ===========================================================================
                //     If the substring is listed in the exclusions array, return the substr
                // in it's unformatted state.
                // ===========================================================================
                if (exclusions != undefined && exclusions.includes(normalizedSubstr)) {
                    return `${substr.charAt(0).toLowerCase()}${substr.slice(1)}`;
                }
                // ===========================================================================
                //     If the substring is not excluded, capitalize the first letter and
                // return the formatted substring.
                // ===========================================================================
                return `${substr.charAt(0).toUpperCase()}${substr.slice(1)}`;
            });
            // ===========================================================================
            // Return the title case string.
            // ===========================================================================
            return titleCaseArr.join(" ");
        }

    }

}
