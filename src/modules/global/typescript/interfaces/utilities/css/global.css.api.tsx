// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace CSS {

    // * =========================================================================
    // * CSS ELEMENT VARIABLES
    // * =========================================================================

    /**
     * A namespace containing various elements whose CSS/SCSS 
     * variables are mapped to application stylesheets.
     * @version 0.1.0
     */

    export namespace Elements {

        // * =========================================================================
        // * CSS ELEMENT VARIABLES - BUTTON
        // * =========================================================================

        /**
         * A namespace that contains variable information about button elements
         * wired up in application stylesheets.
         * @version 0.1.0
         */

        export namespace Button {

            // * =========================================================================
            // * CSS ELEMENT VARIABLES - BUTTON - BACKGROUND COLORS
            // * =========================================================================

            /**
             * A enum that includes all of the button element background color variables whose
             * values are mapped to CSS variables in application stylesheets.
             * @version 0.1.0
             */
    
            export enum BackgroundColor {
    
                Primary = "----button-primary__background-color",
                PrimaryActive = "----button-primary__background-color--active",
                PrimaryDisabled = "----button-primary__background-color--disabled",
                PrimaryFocus = "----button-primary__background-color--focus",
                PrimaryHover = "----button-primary__background-color--hover",
                Secondary = "----button-secondary__background-color",
                SecondaryActive = "----button-secondary__background-color--active",
                SecondaryDisabled = "----button-secondary__background-color--disabled",
                SecondaryFocus = "----button-secondary__background-color--focus",
                SecondaryHover = "----button-secondary__background-color--hover"
    
            }

            /**
             * A type that includes all of the button element CSS/SCSS background color variables that are
             * configured within the application and wired up through it's stylesheets.
             * @version 0.1.0
             */

            export type BackgroundColors = {

                /**
                 * The default background color value used for primary button elements.
                 * @version 0.1.0
                 */
                
                primary: string,

                /**
                 * The background color value used for primary button elements
                 * that are currently active.
                 * @version 0.1.0
                 */

                primary_active: string,

                /**
                 * The background color value used for primary button elements
                 * that are currently disabled.
                 * @version 0.1.0
                 */

                primary_disabled: string,
                
                /**
                 * The background color value used for primary button elements
                 * that are currently focused.
                 * @version 0.1.0
                 */
                
                primary_focus: string,

                /**
                 * The background color value used for primary button elements
                 * that are currently hovered.
                 * @version 0.1.0
                 */

                primary_hover: string,

                /**
                 * The default background color value used for secondary button elements.
                 * @version 0.1.0
                 */

                secondary: string,

                /**
                 * The background color value used for secondary button elements
                 * that are currently active.
                 * @version 0.1.0
                 */

                secondary_active: string,

                /**
                 * The background color value used for secondary button elements
                 * that are currently disabled.
                 * @version 0.1.0
                 */

                secondary_disabled: string,

                /**
                 * The background color value used for secondary button elements
                 * that are currently focused.
                 * @version 0.1.0
                 */

                secondary_focus: string,

                /**
                 * The background color value used for secondary button elements
                 * that are currently hovered.
                 * @version 0.1.0
                 */

                secondary_hover: string

            }

            // * =========================================================================
            // * CSS ELEMENT VARIABLES - BUTTON - BORDERS
            // * =========================================================================
    
            /**
             * A enum that includes all of the button element border variables whose
             * values are mapped to CSS variables in application stylesheets.
             * @version 0.1.0
             */
            
            export enum Border {
    
                Primary = "----button-primary__border",
                PrimaryActive = "----button-primary__border--active",
                Secondary = "----button-secondary__border",
                SecondaryActive = "----button-secondary__border--active",
    
            }

            /**
             * A type that includes all of the button element CSS/SCSS border variables that are
             * configured within the application and wired up through it's stylesheets.
             * @version 0.1.0
             */

            export type Borders = {

                /**
                 * The default border value used for primary button elements.
                 * @version 0.1.0
                 */

                primary: string,

                /**
                 * The border value used for primary button elements that
                 * are currently active.
                 * @version 0.1.0
                 */
                
                primary_active: string,

                /**
                 * The default border value used for secondary button elements.
                 * @version 0.1.0
                 */

                secondary: string,

                /**
                 * The border value used for secondary button elements that
                 * are currently active.
                 * @version 0.1.0
                 */

                secondary_active: string,

            }

            // * =========================================================================
            // * CSS ELEMENT VARIABLES - BUTTON - COLORS
            // * =========================================================================

            /**
             * A enum that includes all of the button element color variables whose
             * values are mapped to CSS variables in application stylesheets.
             * @version 0.1.0
             */
    
            export enum Color {
    
                Primary = "----button-primary__color",
                PrimaryActive = "----button-primary__color--active",
                PrimaryDisabled = "----button-primary__color--disabled",
                PrimaryFocus = "----button-primary__color--focus",
                PrimaryHover = "----button-primary__color--hover",
                Secondary = "----button-secondary__color",
                SecondaryActive = "----button-secondary__color--active",
                SecondaryDisabled = "----button-secondary__color--disabled",
                SecondaryFocus = "----button-secondary__color--focus",
                SecondaryHover = "----button-secondary__color--hover"
    
            }

            /**
             * A type that includes all of the button element CSS/SCSS color variables that are
             * configured within the application and wired up through it's stylesheets.
             * @version 0.1.0
             */

            export type Colors = {

                /**
                 * The default color value used for primary button elements.
                 * @version 0.1.0
                 */

                primary: string,

                /**
                 * The color value used for primary button elements that
                 * are currently active.
                 * @version 0.1.0
                 */
                
                primary_active: string,

                /**
                 * The color value used for primary button elements that
                 * are currently disabled.
                 * @version 0.1.0
                 */
                
                primary_disabled: string,

                /**
                 * The color value used for primary button elements that
                 * are currently focused.
                 * @version 0.1.0
                 */        

                primary_focus: string,

                /**
                 * The color value used for primary button elements that
                 * are currently hovered.
                 * @version 0.1.0
                 */

                primary_hover: string,

                /**
                 * The default color value used for secondary button elements.
                 * @version 0.1.0
                 */

                secondary: string,

                /**
                 * The color value used for secondary button elements that
                 * are currently active.
                 * @version 0.1.0
                 */

                secondary_active: string,

                /**
                 * The color value used for secondary button elements that
                 * are currently disabled.
                 * @version 0.1.0
                 */

                secondary_disabled: string,

                /**
                 * The color value used for secondary button elements that
                 * are currently focused.
                 * @version 0.1.0
                 */

                secondary_focus: string,

                /**
                 * The color value used for secondary button elements that
                 * are currently hovered.
                 * @version 0.1.0
                 */

                secondary_hover: string

            }
    
        }

    }

    // * =========================================================================
    // * CSS GLOBAL VARIABLES
    // * =========================================================================

    export namespace Global {

        // * =========================================================================
        // * CSS GLOBAL VARIABLES - BREAKPOINTS
        // * =========================================================================

        /**
         * A enum that includes all of the global breakpoint variables whose
         * values are mapped to CSS variables in application stylesheets.
         * @version 0.1.0
         */

        export enum Breakpoint {

            Small = "------breakpoint-small",
            Medium = "------breakpoint-medium",
            Large = "------breakpoint-large",
            XLarge = "------breakpoint-x-large",
            XXLarge = "------breakpoint-xx-large"

        }

        /**
         * A type that includes all of the global CSS/SCSS breakpoint variables that are
         * configured within the application and wired up through it's stylesheets.
         * @version 0.1.0
         */

        export type Breakpoints = {

            /**
             * The global small breakpoint value.
             * @version 0.1.0
             */

            small: string,

            /**
             * The global medium breakpoint value.
             * @version 0.1.0
             */
            
            medium: string,

            /**
             * The global large breakpoint value.
             * @version 0.1.0
             */

            large: string,

            /**
             * The global extra large breakpoint value.
             * @version 0.1.0
             */

            x_large: string,

            /**
             * The global double extra large breakpoint value.
             * @version 0.1.0
             */            

            xx_large: string

        }

        // * =========================================================================
        // * CSS GLOBAL VARIABLES - COLORS
        // * =========================================================================

        /**
         * A enum that includes all of the global color variables whose
         * values are mapped to CSS variables in application stylesheets.
         * @version 0.1.0
         */

        export enum Color {

            Primary = "------color--primary",
            Secondary = "------color--secondary",
            Red = "------color--red",
            Orange = "------color--orange",
            Yellow = "------color--yellow",
            Green = "------color--green",
            Blue = "------color--blue",
            Purple = "------color--purple",
            Pink = "------color--pink",

        }

        /**
         * A type that includes all of the global CSS/SCSS color variables that are
         * configured within the application and wired up through it's stylesheets.
         * @version 0.1.0
         */

        export type Colors = {

            /**
             * The global primary color value.
             * @version 0.1.0
             */

            primary: string,

            /**
             * The global secondary color value.
             * @version 0.1.0
             */

            secondary: string,

            /**
             * The global default "red" color value.
             * @version 0.1.0
             */

            red: string,

            /**
             * The global default "orange" color value.
             * @version 0.1.0
             */            

            orange: string,

            /**
             * The global default "yellow" color value.
             * @version 0.1.0
             */

            yellow: string,

            /**
             * The global default "green" color value.
             * @version 0.1.0
             */            

            green: string,

            /**
             * The global default "blue" color value.
             * @version 0.1.0
             */

            blue: string,

            /**
             * The global default "purple" color value.
             * @version 0.1.0
             */

            purple: string,

            /**
             * The global default "pink" color value.
             * @version 0.1.0
             */

            pink: string

        }

        // * =========================================================================
        // * CSS GLOBAL VARIABLES - FONT FAMILIES
        // * =========================================================================

        /**
         * A enum that includes all of the global font family variables whose
         * values are mapped to CSS variables in application stylesheets.
         * @version 0.1.0
         */

        export enum FontFamily {

            Primary = "------font-family--primary",
            Secondary = "------font-family--secondary"

        }

        /**
         * A type that includes all of the global CSS/SCSS font family variables that are
         * configured within the application and wired up through it's stylesheets.
         * @version 0.1.0
         */

        export type FontFamilies = {


            /**
             * The global primary font family value.
             * @version 0.1.0
             */

            primary: string,

            /**
             * The global secondary font family value.
             * @version 0.1.0
             */

            secondary: string

        }

        // * =========================================================================
        // * CSS GLOBAL VARIABLES - FONT SIZES
        // * =========================================================================

        /**
         * A enum that includes all of the global font size variables whose
         * values are mapped to CSS variables in application stylesheets.
         * @version 0.1.0
         */

        export enum FontSize {

            Root = "------font-size--root",
            H1 = "------font-size--h1",
            H2 = "------font-size--h2",
            H3 = "------font-size--h3",
            H4 = "------font-size--h4",
            H5 = "------font-size--h5",
            H6 = "------font-size--h6"

        }

        /**
         * A type that includes all of the global CSS/SCSS font size variables that are
         * configured within the application and wired up through it's stylesheets.
         * @version 0.1.0
         */

        export type FontSizes = {

            /**
             * The global root font size value.
             * @version 0.1.0
             */

            root: string,

            /**
             * The largest global font size value (h1).
             * @version 0.1.0
             */

            h1: string,

            /**
             * The second largest global font size value (h2).
             * @version 0.1.0
             */

            h2: string,

            /**
             * The third largest global font size value (h3).
             * @version 0.1.0
             */

            h3: string,

            /**
             * The fourth largest global font size value (h4).
             * @version 0.1.0
             */

            h4: string,

            /**
             * The fifth largest global font size value (h5).
             * @version 0.1.0
             */

            h5: string,

            /**
             * The sixth largest global font size value (h6).
             * @version 0.1.0
             */

            h6: string

        }

    }

    // * =========================================================================
    // * CSS VARIABLES 
    // * =========================================================================

    /**
     * A type that includes all of the CSS/SCSS variables that are explicitly 
     * configured within the application and wired up through it's stylesheets.
     * @version 0.1.0
     */

    export type Variables = {

        /**
         * A parent object containing a list of generic properties that
         * are mapped to CSS/SCSS variables with appliation stylesheets.
         * @version 0.1.0
         */

        generic: {

            /**
             * An object containing global color values that are mapped
             * to CSS/SCSS variables within application stylesheets.
             * @version 0.1.0
             */

            colors: Global.Colors,

            /**
             * An object containing global breakpoint values that are mapped
             * to CSS/SCSS variables within application stylesheets.
             * @version 0.1.0
             */

            breakpoints: Global.Breakpoints,

            /**
             * An object containing global font family values that are mapped
             * to CSS/SCSS variables within application stylesheets.
             * @version 0.1.0
             */

            font_families: Global.FontFamilies,

            /**
             * An object containing global font size values that are mapped
             * to CSS/SCSS variables within application stylesheets.
             * @version 0.1.0
             */

            font_sizes: Global.FontSizes,

        },

        /**
         * A parent object containg a list of elements whose properties
         * are mapped to CSS/SCSS variables with appliation stylesheets.
         * @version 0.1.0
         */

        elements: {

            /**
             * An object containing various button properties whose values
             * are mapped to CSS/SCSS variables with appliation stylesheets.
             * @version 0.1.0
             */

            button: {

                /**
                 * An object containing button element background color values that are mapped
                 * to CSS/SCSS variables within application stylesheets.
                 * @version 0.1.0
                 */

                background_colors: Elements.Button.BackgroundColors,

                /**
                 * An object containing button element border values that are mapped
                 * to CSS/SCSS variables within application stylesheets.
                 * @version 0.1.0
                 */

                borders: Elements.Button.Borders,

                /**
                 * An object containing button element color values that are mapped
                 * to CSS/SCSS variables within application stylesheets.
                 * @version 0.1.0
                 */

                colors: Elements.Button.Colors,

            }

        }

    }

    // * =========================================================================
    // * FUNCTION EXPORTS
    // * =========================================================================

    export const getVariables = () : Variables => {

        const root = getComputedStyle(document.documentElement);

        const replicate = (property: string) => {

           return root.getPropertyValue(property).trimStart();

        }

        const { Button } = CSS.Elements;

        const variables : Variables = {

            generic: {

                breakpoints: {
    
                    small: replicate(Global.Breakpoint.Small),
                    medium: replicate(Global.Breakpoint.Medium),
                    large: replicate(Global.Breakpoint.Large),
                    x_large: replicate(Global.Breakpoint.XLarge),
                    xx_large: replicate(Global.Breakpoint.XXLarge)
    
                },
    
                colors: {
    
                    primary: replicate(Global.Color.Primary),
                    secondary: replicate(Global.Color.Secondary),
                    red: replicate(Global.Color.Red),
                    orange: replicate(Global.Color.Orange),
                    yellow: replicate(Global.Color.Yellow),
                    green: replicate(Global.Color.Green),
                    blue: replicate(Global.Color.Blue),
                    purple: replicate(Global.Color.Purple),
                    pink: replicate(Global.Color.Pink),
    
                },
    
                font_families: {
    
                    primary: replicate(Global.FontFamily.Primary),
                    secondary: replicate(Global.FontFamily.Secondary)
    
                },
    
                font_sizes: {
    
                    root: replicate(Global.FontSize.Root),
                    h1: replicate(Global.FontSize.H1),
                    h2: replicate(Global.FontSize.H2),
                    h3: replicate(Global.FontSize.H3),
                    h4: replicate(Global.FontSize.H4),
                    h5: replicate(Global.FontSize.H5),
                    h6: replicate(Global.FontSize.H6)
    
                }
    
            },

            elements: {

                button: {

                    background_colors: {

                        primary: replicate(Button.BackgroundColor.Primary),
                        primary_active: replicate(Button.BackgroundColor.PrimaryActive),
                        primary_disabled: replicate(Button.BackgroundColor.PrimaryDisabled),
                        primary_focus: replicate(Button.BackgroundColor.PrimaryFocus),
                        primary_hover: replicate(Button.BackgroundColor.PrimaryHover),
                        secondary: replicate(Button.BackgroundColor.Secondary),
                        secondary_active: replicate(Button.BackgroundColor.SecondaryActive),
                        secondary_disabled: replicate(Button.BackgroundColor.SecondaryDisabled),
                        secondary_focus: replicate(Button.BackgroundColor.SecondaryFocus),
                        secondary_hover: replicate(Button.BackgroundColor.SecondaryHover)

                    },

                    borders: {

                        primary: replicate(Button.Border.Primary),
                        primary_active: replicate(Button.Border.PrimaryActive),
                        secondary: replicate(Button.Border.Secondary),
                        secondary_active: replicate(Button.Border.Secondary)

                    },

                    colors: {

                        primary: replicate(Button.Color.Primary),
                        primary_active: replicate(Button.Color.PrimaryActive),
                        primary_disabled: replicate(Button.Color.PrimaryDisabled),
                        primary_focus: replicate(Button.Color.PrimaryFocus),
                        primary_hover: replicate(Button.Color.PrimaryHover),
                        secondary: replicate(Button.Color.Secondary),
                        secondary_active: replicate(Button.Color.SecondaryActive),
                        secondary_disabled: replicate(Button.Color.SecondaryDisabled),
                        secondary_focus: replicate(Button.Color.SecondaryFocus),
                        secondary_hover: replicate(Button.Color.SecondaryHover)

                    }

                }

            }

        }


        return variables;

    }

    export function calculateContrastFG(color: string){

        if (color.includes("#")) {

            const contrastThreshold = 170;

            const hex = color.split("#")[1];
    
            const r = parseInt((hex[0] + hex[1]), 16);
    
            const g = parseInt((hex[2] + hex[3]), 16);
    
            const b = parseInt((hex[4] + hex[5]), 16);
    
            const contrastRatio = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    
            return (contrastRatio >= contrastThreshold) ? 'black' : 'white';

        } else {

            return "#ffffff";

        }
    
    }

}