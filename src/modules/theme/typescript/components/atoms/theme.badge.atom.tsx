// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { FunctionComponent, useEffect, useRef } from "react";

// * ===========================================================================
// * Badge Namespace
// * ===========================================================================

/**
 * A namespace containing Badge component specific data structures and functions.
 * @version 0.1.0
 */
export namespace Badge {

    // * ===========================================================================
    // * Badge Variant Enumerator
    // * ===========================================================================

    /**
     *     An enumerator containing all of the supported variants of the Badge component. The
     * values of these enums are also used in a data attribute on the Badge element to
     * support targeting of specific variants.
     * @version 0.1.0
     */
    export enum Variant {
        Empty = "badge--empty",
        Icon = "badge--icon",
        Number = "badge--number",
    }

    // * ===========================================================================
    // * Badge Component Properties
    // * ===========================================================================

    /**
     *     A type containing all of the default properties of a `span` element as well 
     * as custom properties specific to the Badge component and it's variants.
     * @version 0.1.0
     */
    export type Properties = JSX.IntrinsicElements["span"] & {
        /**
         * An object containing custom properties of the Badge component.
         * @version 0.1.0
         */
        props?: {
            /**
             * The content that will be displayed in the badge.
             * @version 0.1.0
             */
            content?: string | number,
            /**
             *     An object containing settings that alter the behavior and display 
             * of the Badge component number variant.
             * @version 0.1.0
             */
            options?: {
                /**
                 *     An optional setting that will hide the badge value if it is zero.
                 * Instead of displaying a number, the badge will appear as an empty bubble.
                 * @version 0.1.0
                 */
                enable_hide_zero_value?: boolean,
                /**
                 *     An optional setting that, if enabled, will append a plus symbol after
                 * the maximum value if the badge value exceeds it. This setting will only 
                 * take effect if the `maximum_value` setting is used.
                 * @version 0.1.0
                 */
                enable_maximum_value_plus?: boolean,
                /**
                 *     An optional setting that clamps the badge value to an upper bound. If the 
                 * badge value exceeds the maximum value, the maximum will be displayed instead.
                 * @version 0.1.0
                 */
                maximum_value?: number,
            },
            /**
             *     An object containing optional styling properties that will change
             * how the Badge component displays.
             * @version 0.1.0
             */
            styles?: {                    
                background_color?: string,
                color?: string,
            }
            variant?: Badge.Variant,
        }
    }

    // * ===========================================================================
    // * Badge Atom Component
    // * ===========================================================================
    
    /**
     *     A Badge component that is used to indicate the status of another
     * element. The following Badge variant types are supported:
     * - A numberic counter displaying the number of unread emails in an inbox.
     * - A checkmark icon denoting that the text input of a form field is valid.
     * - An "empty" Badge that displays a colored notification "bubble".
     * @returns The JSX Element of the Badge component to be rendered. 
     * @version 0.1.0
     */
    export const Atom : FunctionComponent<Properties> = ({ props, ...rest }) : JSX.Element => {

        // ===========================================================================
        // Create a ref for the Badge component element.
        // ===========================================================================
        const badgeRef = useRef<HTMLDivElement>(null);
        /**
         *     A method for generating a concatenated string of class names that will appear
         * on the Badge component element.
         * @returns A generated string of concatenated class names.
         * @version 0.1.0
         */
        const generateClassName = () : string => {
            let variant : Variant = Variant.Empty;
            let classArray = [];
            // ===========================================================================
            // Set the variant type depending on props and options provided.
            // ===========================================================================
            if (props?.variant != undefined) {
                if (props.variant === Variant.Number) {
                    if (props.content === 0 && props.options?.enable_hide_zero_value === true) {
                        variant = Variant.Empty;
                    } else {
                        variant = Variant.Number;
                    }
                } else {
                    variant = props.variant;
                }
            }
            rest?.className === undefined
                ? classArray.push(`badge ${variant}`)
                : classArray.push(`badge ${variant} ${rest.className}`);
            return classArray.join("");
        };
        /**
         *     A method for dynamically generating the content that will
         * display for the Badge depending on which Badge component 
         * variant is in use.
         * @version 0.1.0
         */
        const generateBadgeContent = () => {
            if (props?.variant === undefined || props?.variant != Variant.Empty) {
                if (props?.content === undefined) {
                    return;
                }
                if (typeof props.content === "number") {
                    // ===========================================================================
                    // If hiding zero values is enabled and the value is zero, return nothing.
                    // ===========================================================================
                    if (props.content <= 0 && props.options?.enable_hide_zero_value === true) {
                        return;
                    }
                    // ===========================================================================
                    //     If a maximum value is provided, clamp the value to the maximum. If the
                    // maximum plus option is enabled, append a plus symbol to the result.
                    // ===========================================================================
                    if (props.options?.maximum_value != undefined) {
                        if (props.content > props.options.maximum_value) {
                            return (
                                props.options.enable_maximum_value_plus === true
                                    ? `${props.options.maximum_value}+`
                                    : props.options.maximum_value 
                            );
                        }
                        // ===========================================================================
                        // Clamp the lower bound of the value to zero and return.
                        // ===========================================================================
                        return props.content >= 0 ? props?.content : 0;
                    }
                }
            } else {
                // ===========================================================================
                // Return nothing, displaying no badge content.
                // ===========================================================================
                return;
            }
        };
        // ===========================================================================
        //     Using an effect hook, programmatically set the Badge component's parent
        // element to "position: relative" by giving it the "badge-container" class.
        // ===========================================================================
        useEffect(() => {
            const badgeElement = badgeRef.current;
            if (badgeElement) {
                const parentElement = badgeElement.parentElement;
                badgeElement.parentElement?.classList.add("badge-container");
                if (props?.variant != Variant.Empty) {
                    badgeElement.style.left = `${parentElement!.offsetWidth - 12}px`
                }
            }
        }, []);
        // ===========================================================================
        // Render the Badge component.
        // ===========================================================================
        return (
            <span
                className={ generateClassName() }
                ref={ badgeRef }
                { ...rest }
            >
                { generateBadgeContent() }
            </span>
        );
        
    }

}