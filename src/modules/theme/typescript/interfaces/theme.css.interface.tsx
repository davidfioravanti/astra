/**
 *     A namespace containing data structures and utility functions for
 * working with theme styling. Used primarily for reading and using SCSS 
 * variables inside of TypeScript components.
 * @version 0.1.0
 */
export namespace CSS {

    /**
     *     A namespace containing data structures relating to the styling 
     * of generic HTML elements.
     * @version 0.1.0
     */
    export namespace Atoms {

    }

    /**
     *     A namespace containing data structures relating to all of the theme's
     * "default" variables globally available to all stylesheets.
     * @version 0.1.0
     */
    export namespace Defaults {

        /**
         * An enum that maps to the theme's "default" `border-radius` CSS variables.
         * @version 0.1.0
         */
        export enum BorderRadius {
            Default = "------border-radius",
        }

        /**
         * A type that encapsulates all of the theme's "default" `border-radius` CSS variables.
         * @version 0.1.0
         */
        export type BorderRadiuses = {
            /**
             * The theme's "default" `border-radius` variable.
             * @version 0.1.0
             */
            default: string,
        }

        /**
         * An enum that maps to the theme's "default" `border-style` CSS variables.
         * @version 0.1.0
         */
        export enum BorderStyle {
            Default = "------border-style",
        }

        /**
         * A type that encapsulates all of the theme's "default" `border-style` CSS variables.
         * @version 0.1.0
         */
        export type BorderStyles = {
            /**
             * The theme's "default" `border-style` variable.
             * @version 0.1.0
             */
            default: string,
        }

        /**
         * An enum that maps to the theme's "default" `border-width` CSS variables.
         * @version 0.1.0
         */
        export enum BorderWidth {
            Default = "------border-width",
        }

        /**
         * A type that encapsulates all of the theme's "default" `border-width` CSS variables.
         * @version 0.1.0
         */
        export type BorderWidths = {
            /**
             * The theme's "default" `border-width` variable.
             * @version 0.1.0
             */
            default: string,
        }

        /**
         * An enum that maps to the theme's "default" breakpoint CSS variables.
         * @version 0.1.0
         */
        export enum Breakpoint {
            Large = "------breakpoint--large",
            Medium = "------breakpoint--medium",
            Small = "------breakpoint--small",
            XLarge = "------breakpoint--x-large",
            XXLarge = "------breakpoint--xx-large",
        }

        /**
         * A type that encapsulates all of the theme's "default" breakpoint cSS variables.
         * @version 0.1.0
         */
        export type Breakpoints = {
            /**
             * The theme's "default" breakpoint for large screen sizes (desktop).
             * @version 0.1.0
             */
            large: string,
            /**
             * The theme's "default" breakpoint for medium screen sizes (tablet).
             * @version 0.1.0
             */
            medium: string,
            /**
             * The theme's "default" breakpoint for small screen sizes (mobile).
             * @version 0.1.0
             */
            small: string,
            /**
             * The theme's "default" breakpoint for extra large screen sizes (wide-screen).
             * @version 0.1.0
             */
            x_large: string,
            /**
             * The theme's "default" breakpoint for very large screen sizes (ultrawide).
             * @version 0.1.0
             */
            xx_large: string,
        }

        /**
         * An enum that maps to theme's "default" color CSS variables.
         * @version 0.1.0
         */
        export enum Color {
            Black = "------color--black",
            Blue = "------color--blue",
            Gray = "------color--gray",
            Green = "------color--green",
            Orange = "------color--orange",
            Pink = "------color--pink",
            Purple = "------color--purple",
            Red = "------color--red",
            White = "------color--white",
            Yellow = "------color--yellow",
        }

        /**
         * A type the encapsulates all of the theme's "default" color CSS variables.
         * @version 0.1.0
         */
        export type Colors = {
            /**
             * The theme's "default" black color.
             * @version 0.1.0
             */
            black: string,
            /**
             * The theme's "default" blue color.
             * @version 0.1.0
             */
            blue: string,
            /**
             * The theme's "default" gray color.
             * @version 0.1.0
             */
            gray: string,
            /**
             * The theme's "default" green color.
             * @version 0.1.0
             */
            green: string,
            /**
             * The theme's "default" orange color.
             * @version 0.1.0
             */
            orange: string,
            /**
             * The theme's "default" pink color.
             * @version 0.1.0
             */
            pink: string,
            /**
             * The theme's "default" purple color.
             * @version 0.1.0
             */
            purple: string,
            /**
             * The theme's "default" red color.
             * @version 0.1.0
             */
            red: string,
            /**
             * The theme's "default" white color.
             * @version 0.1.0
             */
            white: string,
            /**
             * The theme's "default" yellow color.
             * @version 0.1.0
             */
            yellow: string,
        }

        /**
         * An enum that maps to the theme's "default" `font-family` CSS variables.
         * @version 0.1.0
         */
        export enum FontFamily {
            Primary = "------font-family--primary",
            Secondary = "------font-family--secondary",
        }

        /**
         * A type the encapsulates all of the theme's "default" `font-family` CSS variables.
         * @version 0.1.0
         */
        export type FontFamilies = {
            /**
             * The theme's "default" primary `font-family`.
             * @version 0.1.0
             */
            primary: string,
            /**
             * The theme's "default" secondary `font-family`.
             * @version 0.1.0
             */
            secondary: string,
        }

        /**
         * An enum that maps to the theme's "default" `font-size` CSS variables.
         * @version 0.1.0
         */
        export enum FontSize {
            Base = "------font-size--base",
            H1 = "------font-size--h1",
            H2 = "------font-size--h2",
            H3 = "------font-size--h3",
            H4 = "------font-size--h4",
            H5 = "------font-size--h5",
            H6 = "------font-size--h6",
        }

        /**
         * A type that encapsulates all of the theme's "default" `font-size` CSS variables.
         * @version 0.1.0
         */
        export type FontSizes = {
            /**
             * The theme's base `font-size`.
             * @version 0.1.0
             */
            base: string,
            /**
             * The theme's largest "default" `font-size` for headings.
             * @version 0.1.0
             */
            h1: string,
            /**
             * The theme's second largest"default" `font-size` for headings.
             * @version 0.1.0
             */
            h2: string,
            /**
             * The theme's third largest "default" `font-size` for headings.
             * @version 0.1.0
             */
            h3: string,
            /**
             * The theme's fourth largest "default" `font-size` for headings.
             * @version 0.1.0
             */
            h4: string,
            /**
             * The theme's fifth largest "default" `font-size` for headings.
             * @version 0.1.0
             */
            h5: string,
            /**
             * The theme's smallest "default" `font-size` for headings.
             */
            h6: string,
        }

        /**
         * An enum that maps to the theme's "default" `font-weight` CSS variables.
         * @version 0.1.0
         */
        export enum FontWeight {
            Bold = "------font-weight--bold",
            ExtraBold = "------font-weight--extra-bold",
            ExtraLight = "------font-weight--extra-light",
            Heavy = "------font-weight--heavy",
            Light = "------font-weight--light",
            Medium = "------font-weight--medium",
            Normal = "------font-weight--normal",
            SemiBold = "------font-weight--semi-bold",
            Thin = "------font-weight--thin",
        }

        /**
         * A type that encapsulates all of the theme's "default" `font-weight` CSS variables.
         * @version 0.1.0
         */
        export type FontWeights = {
            /**
             * The theme's "default" bold `font-weight`.
             * @version 0.1.0
             */
            bold: string,
            /**
             * The theme's "default" second boldest `font-weight`.
             * @version 0.1.0
             */
            extra_bold: string,
            /**
             * The theme's "default" second lightest `font-weight`.
             * @version 0.1.0
             */
            extra_light: string,
            /**
             * The theme's "default" boldest `font-weight`.
             * @version 0.1.0
             */
            heavy: string,
            /**
             * The theme's "default" light `font-weight`.
             * @version 0.1.0
             */
            light: string,
            /**
             * The theme's "default" medium `font-weight`.
             * @version 0.1.0
             */
            medium: string,
            /**
             * The theme's "default" normal `font-weight`.
             * @version 0.1.0
             */
            normal: string,
            /**
             * The theme's "default" third boldest `font-weight`.
             * @version 0.1.0
             */
            semi_bold: string,
            /**
             * The theme's "default" lightest `font-weight`.
             * @version 0.1.0
             */
            thin: string,
        }

    }

    /**
     *     A namespace containing data structures relating to generic HTML
     * element styling.
     * @version 0.1.0
     */
    export namespace Elements {
        
    }

    export type Variables = {
        /**
         * An object containing all of the "Atom" CSS variable mappings.
         * @version 0.1.0
         */
        atoms: {

        },
        /**
         * An object containing all of the "default" CSS variable mappings.
         * @version 0.1.0
         */
        defaults: {
            /**
             * An object containing mappings to "default" `border-radius` CSS variables.
             * @version 0.1.0
             */
            border_radiuses: Defaults.BorderRadiuses,
            /**
             * An object containing mappings to "default" `border-style` CSS variables.
             * @version 0.1.0
             */
            border_styles: Defaults.BorderStyles,
            /**
             * An object containing mappings to "default" `border-width` CSS variables.
             * @version 0.1.0
             */
            border_widths: Defaults.BorderWidths,
            /**
             * An object containing mappings to "default" breakpoint CSS variables.
             * @version 0.1.0
             */
            breakpoints: Defaults.Breakpoints,
            /**
             * An object containing mappings to "default" color CSS variables.
             * @version 0.1.0
             */
            colors: Defaults.Colors,
            /**
             * An object containing mappings to "default" `font-family` CSS variables.
             * @version 0.1.0
             */
            font_families: Defaults.FontFamilies,
            /**
             * An object containing mappings to "default" `font-size` CSS variables.
             * @version 0.1.0
             */
            font_sizes: Defaults.FontSizes,
            /**
             * An object containing mappings to "default" `font-weight` CSS variables.
             * @version 0.1.0
             */
            font_weights: Defaults.FontWeights,
        },
        /**
         * An object containing CSS variable mappings for native HTML elements.
         * @version 0.1.0
         */
        elements: {

        }
    }

    /**
     * A utility function that converts a `rem` value to a pixel value. 
     * @param rem - The `rem` value to convert to a pixel value.
     * @param rootFontSize - An optional font size to use as the scalar in
     * calculating the correct pixel conversion. If not inlcuded, the root font
     * size of the document's body tag will be used.
     * @returns A pixel value string.
     * @version 0.1.0
     */
    export const convertRemToPixels = (rem: number, rootFontSize?: number) => {
        const scalar = rootFontSize != undefined 
            ? rootFontSize
            : parseFloat(getComputedStyle(document.body).getPropertyValue("font-size"));
        return `${rem * scalar}px`;
    }

    /**
     *     A utility function that retrieves the values of CSS root variables and
     * returns an object containing their mapped values. Used to get CSS variables
     * within TypeScript files.
     * @returns An object containing the computed values of CSS root variables.
     * @version 0.1.0
     */
    export const getVariables = () : CSS.Variables => {
        const root : CSSStyleDeclaration = getComputedStyle(document.documentElement);
        /**
         * A function that retrieves the computed value of a style property.
         * @param property - The property to retrieve a computed value for.
         * @returns The computed property value.
         * @version 0.1.0
         */
        const replicate = (property: string) : string => {
            return root.getPropertyValue(property).trimStart();
        };
        const variables : Variables = {
            atoms: {

            },
            defaults: {
                border_radiuses: {
                    default: replicate(Defaults.BorderRadius.Default),
                },
                border_styles: {
                    default: replicate(Defaults.BorderRadius.Default),
                },
                border_widths: {
                    default: replicate(Defaults.BorderWidth.Default),
                },
                breakpoints: {
                    large: replicate(Defaults.Breakpoint.Large),
                    medium: replicate(Defaults.Breakpoint.Medium),
                    small: replicate(Defaults.Breakpoint.Small),
                    x_large: replicate(Defaults.Breakpoint.XLarge),
                    xx_large: replicate(Defaults.Breakpoint.XXLarge),
                },
                colors: {
                    black: replicate(Defaults.Color.Black),
                    blue: replicate(Defaults.Color.Blue),
                    gray: replicate(Defaults.Color.Gray),
                    green: replicate(Defaults.Color.Green),
                    orange: replicate(Defaults.Color.Orange),
                    pink: replicate(Defaults.Color.Pink),
                    purple: replicate(Defaults.Color.Purple),
                    red: replicate(Defaults.Color.Red),
                    white: replicate(Defaults.Color.White),
                    yellow: replicate(Defaults.Color.Yellow),
                },
                font_families: {
                    primary: replicate(Defaults.FontFamily.Primary),
                    secondary: replicate(Defaults.FontFamily.Secondary),
                },
                font_sizes: {
                    base: replicate(Defaults.FontSize.Base),
                    h1: replicate(Defaults.FontSize.H1),
                    h2: replicate(Defaults.FontSize.H2),
                    h3: replicate(Defaults.FontSize.H3),
                    h4: replicate(Defaults.FontSize.H4),
                    h5: replicate(Defaults.FontSize.H5),
                    h6: replicate(Defaults.FontSize.H6),
                },
                font_weights: {
                    bold: replicate(Defaults.FontWeight.Bold),
                    extra_bold: replicate(Defaults.FontWeight.ExtraBold),
                    extra_light: replicate(Defaults.FontWeight.ExtraLight),
                    heavy: replicate(Defaults.FontWeight.Heavy),
                    light: replicate(Defaults.FontWeight.Light),
                    medium: replicate(Defaults.FontWeight.Medium),
                    normal: replicate(Defaults.FontWeight.Normal),
                    semi_bold: replicate(Defaults.FontWeight.SemiBold),
                    thin: replicate(Defaults.FontWeight.Thin),
                },
            },
            elements: {

            }
        };
        return variables;
    }

}