// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { FunctionComponent, useEffect, useRef } from "react";

// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

// * ===========================================================================
// * Heading Namespace
// * ===========================================================================

export namespace Heading {

    export enum Level {
        H1 = "h1",
        H2 = "h2",
        H3 = "h3",
        H4 = "h4",
        H5 = "h5",
        H6 = "h6"
    }
    
    export type Properties = JSX.IntrinsicElements["h1"] & {
        props: {
            level: Heading.Level
        }
    }

    export const Atom : FunctionComponent<Properties> = ({ props, ...rest}) : JSX.Element => {
        const HeadingLevel = props.level;
        return (
            <HeadingLevel>
                { rest.children }
            </HeadingLevel>
        )
    
    }

}