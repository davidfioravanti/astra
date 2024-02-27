// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { FunctionComponent, useEffect, useRef } from "react";

// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

import { GoogleFonts } from "../../../../astra/typescript/astra.reducer";

// * ===========================================================================
// * Icon Namespace
// * ===========================================================================

export namespace Icon {

    // * ===========================================================================
    // * Icon Type (Google Fonts)
    // * ===========================================================================

    export const Type = GoogleFonts.Icon;

    // * ===========================================================================
    // * Icon Properties
    // * ===========================================================================

    export type Properties = JSX.IntrinsicElements["i"] & {
        /**
         * An object containing custom properties of the Icon component.
         * @version 0.1.0
         */
        props: {
            /**
             *     The icon glyph that will render in the component. These map to
             * a wrapperized enum of Google Font icons.
             * @version 0.1.0
             */
            type: GoogleFonts.Icon
        }
    }

    // * ===========================================================================
    // * Icon Component
    // * ===========================================================================

    export const Atom : FunctionComponent<Properties> = ({ props, ...rest}) : JSX.Element => {
        /**
         *     A method for generating a concatenated string of class names that will appear
         * on the Icon component element.
         * @returns A generated string of concatenated class names.
         * @version 0.1.0
         */
        const generateClassName = () => {
            let classArray = [];
            rest?.className === undefined
                ? classArray.push(`icon icon--${props.type} material-icons`)
                : classArray.push(`icon icon--${props.type} ${rest.className} material-icons`);
            return classArray.join("");
        }
        // ===========================================================================
        // Render the Icon component.
        // ===========================================================================
        return (
            <i
                className={ generateClassName() }
                aria-label={ `${props.type} icon` }
            >
                { props.type }
                { rest.children }
            </i>
        );
    }

}