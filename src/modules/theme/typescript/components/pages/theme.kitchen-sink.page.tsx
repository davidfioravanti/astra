// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { FunctionComponent, useState } from "react";

// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

import { CSS } from "../../interfaces/theme.css.interface";
import { Heading } from "../atoms/theme.heading.atom";

// * ===========================================================================
// * Kitchen Sink Namespace
// * ===========================================================================

export namespace KitchenSink {

    // * ===========================================================================
    // * Kitchen Sink Page Properties
    // * ===========================================================================

    export type Properties =  JSX.IntrinsicElements["article"] & {
        props?: {
    
        }
    }

    // * ===========================================================================
    // * Kitchen Sink Page Component
    // * ===========================================================================

    export const Page : FunctionComponent<Properties> = ({ props, ...rest} : Properties) : JSX.Element  => {
        console.log(CSS.getVariables());
        return (
            <article
                className="page page--kitchen-sink"
            >
                <Heading.Atom props={{ level: Heading.Level.H1 }}>
                    ASTRA - Kitchen Sink
                </Heading.Atom>
            </article>
        )
    }

}