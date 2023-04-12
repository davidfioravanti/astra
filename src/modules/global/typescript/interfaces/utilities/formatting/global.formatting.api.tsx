// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace Formatting {

    export namespace ANSI {
        
    }

    export namespace Time {

        export function getDate() : string {

            const date = new Date();
    
            const y = date.toLocaleString("default", { year: "numeric" });
            const m = date.toLocaleString("default", { month: "2-digit" });
            const d = date.toLocaleString("default", { day: "2-digit" });
    
            return `${y}/${m}/${d}`;
    
        }

    }

    export namespace String {

        export enum Case {

            Camel = "camel",
            Pascal = "pascal",
            Snake = "snake",
            Kebab = "kebab"

        }

        /**
         *     A formatting method that splits a string into an array of substrings
         * based on the case of the input string (e.g. camel, pascal, kebab, etc).
         * @param str - A string that will be split into an array of substrings.
         * @returns An array of substrings that were split based 
         * on the detected case of the input string.
         * @version 0.1.0
         */
        
        export function toArray(str: string) : Array<string> {

            const isKebabCase = str.split("-").length > 1;
            const isSnakeCase = str.split("_").length > 1;
            const isCamelOrPascalCase = str.split(" ").length === 1;

            if (isKebabCase) {

                return str.split("-");

            } else if (isSnakeCase) {

                return str.split("_");

            } else if (isCamelOrPascalCase) {

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

        export function toKebabCase(str: string) {

            return str
                .replace(/([a-z])([A-Z])/g, "$1-$2")
                .replace(/[\s_]+/g, '-')
                .toLowerCase();

        }

        export function toTitleCase(
            str: string, 
            options?: { 
                exclusions?: Array<string>
            }) 
        {

            const strArr = toArray(str);

            const titleCaseArr = strArr.map((substr) => {

                const exclusions = options?.exclusions;

                const normalizedSubstr = substr.toLowerCase();

                if (exclusions != undefined && exclusions.includes(normalizedSubstr)) {

                    return `${substr.charAt(0).toLowerCase()}${substr.slice(1)}`;

                }

                return `${substr.charAt(0).toUpperCase()}${substr.slice(1)}`;

            });

            return titleCaseArr.join(" ");

        }

    }

}