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
        Letters = "avatar--letters-variant",
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
            image_alt?: string,
            image_src?: string,
            letters: string,
            options?: {
                /**
                 *      An optional setting that will reveal the username "letters"
                 * over the Avatar component image when hovered. **Requires the image
                 * variant**.
                 * @version 0.1.0
                */
               enable_reveal_letters_on_hover?: boolean,
            },
            size?: Avatar.Size,
            variant: Avatar.Variant,
        }
    }

    // * ===========================================================================
    // * Avatar Component
    // * ===========================================================================

    export const Atom : FunctionComponent<Properties> = ({ props, ...rest}) : JSX.Element => {
        const avatarRef = useRef<HTMLElement>(null);
        /**
         *     A method for generating a concatenated string of class names that will appear
         * on the Avatar component element.
         * @returns A generated string of concatenated class names.
         * @version 0.1.0
         */
        const generateClassName = () => {
            let classArray = [];
            const size = props.size != undefined ? props.size : Size.Small;
            rest?.className === undefined
                ? classArray.push(`avatar ${props.variant} ${size}`)
                : classArray.push(`avatar ${props.variant} ${size} ${rest.className}`);
            if (props.variant === Avatar.Variant.Image && props.options?.enable_reveal_letters_on_hover != false) {
                classArray.push(" avatar--letter-reveal");
            }
            return classArray.join("");
        }
        const generateLetters = () => {
            return props.letters.slice(0, 2).toUpperCase();
        }
        const generateIntrinsicImageSize = () => {
            // ! ==============================================================
            // !     NOTE: Replace computed variable lookup with CSS API that 
            // ! the archived version of Astra used.
            // ! ==============================================================
            const root = getComputedStyle(document.documentElement);
            const variables = {
                small: root.getPropertyValue("--theme--avatar__size--small"),
                medium: root.getPropertyValue("--theme--avatar__size--medium"),
                large: root.getPropertyValue("--theme--avatar__size--large")
            };
            switch (props.size) {
                case Avatar.Size.Small :
                    return variables.small
                case Avatar.Size.Medium :
                    return variables.medium
                case Avatar.Size.Large :
                    return variables.large
                default :
                    return variables.small;
            }
        }
        const handleAvatarFocus = () => {
            const avatarElement = avatarRef.current;
            if (avatarElement) {
                avatarElement.classList.add("focused");
            }
        };
        const handleAvatarBlur = () => {
            const avatarElement = avatarRef.current;
            if (avatarElement) {
                avatarElement.classList.remove('focused');
            }
        };
        // ===========================================================================
        // Render the Icon component.
        // ===========================================================================
        return (
            <figure
                ref={ avatarRef }
                onFocus={ () => handleAvatarFocus() }
                onBlur={ () => handleAvatarBlur() }
                tabIndex={ 0 }
                className={ generateClassName() }
            >
                <img
                    alt={ props.image_alt != undefined ? props.image_alt : `${props.letters.toUpperCase()}'s Avatar Image`}
                    className="avatar__image"
                    src={ props.image_src }
                    width={ generateIntrinsicImageSize() }
                    height={ generateIntrinsicImageSize() }
                />
                <figcaption className="avatar__letters">
                    { generateLetters() }
                </figcaption>
            </figure>
        );
    }

}