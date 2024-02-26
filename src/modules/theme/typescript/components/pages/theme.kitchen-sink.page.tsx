// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { FunctionComponent, useState } from "react";

// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

import { Badge } from "../atoms/theme.badge.atom";

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
        return (
            <article
                className="page page--kitchen-sink"
            >
                <span>
                    <Badge.Atom 
                        props={{
                            content: 1000,
                            options: {
                                maximum_value: 100,
                                enable_maximum_value_plus: true
                            },
                            variant: Badge.Variant.Number
                        }}
                    />
                </span>
            </article>
        )
    }

}