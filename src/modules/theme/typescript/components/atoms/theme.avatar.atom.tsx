// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { FunctionComponent, useEffect, useRef } from "react";

// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

// * ===========================================================================
// * Avatar Namespace
// * ===========================================================================

export namespace Avatar {

    export enum Variant {
        Icon = "avatar--icon-variant",
        Image = "avatar--image-variant",
        Letter = "avatar--letter-variant",
    }

    export enum Size {
        Small = "avatar--small",
        Medium = "avatar--medium",
        Large = "avatar--large",
        XL = "avatar--xl",
    }

    // * ===========================================================================
    // * Avatar Properties
    // * ===========================================================================

    export type Properties = JSX.IntrinsicElements["i"] & {
        /**
         * An object containing custom properties of the Avatar component.
         * @version 0.1.0
         */
        props: {
            image_src?: string,
            user_name: string | [string, string],
            options?: {
                size?: Avatar.Size
            }
            variant: Avatar.Variant
        }
    }

    // * ===========================================================================
    // * Avatar Component
    // * ===========================================================================

    export const Atom : FunctionComponent<Properties> = ({ props, ...rest}) : JSX.Element => {
        /**
         *     A method for generating a concatenated string of class names that will appear
         * on the Avatar component element.
         * @returns A generated string of concatenated class names.
         * @version 0.1.0
         */
        const generateClassName = () => {
            let classArray = [];
            const size = props.options?.size != undefined ? props.options.size : Size.Small;
            rest?.className === undefined
                ? classArray.push(`avatar ${props.variant} ${size}`)
                : classArray.push(`avatar ${props.variant} ${size} ${rest.className}`);
            return classArray.join("");
        }
        const generateUsername = () => {
            if (Array.isArray(props.user_name)) {
                const firstInitial = props.user_name[0].split("")[0].toUpperCase();
                const lastInitial = props.user_name[1].split("")[0].toUpperCase();
                return `${firstInitial}${lastInitial}`;
            }
        }
        const generateFigcaption = () => {
            return (
                <figcaption className="avatar__username">
                    { generateUsername() }
                </figcaption>
            )
        }
        // ===========================================================================
        // Render the Icon component.
        // ===========================================================================
        return (
            <figure
                className={ generateClassName() }
            >
                <img
                    className="avatar__image"
                    src={ props.image_src }
                />
                { generateFigcaption() }
            </figure>
        );
    }

}