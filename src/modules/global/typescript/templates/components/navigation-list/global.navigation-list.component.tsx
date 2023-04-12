// * =========================================================================
// * IMPORTS
// * =========================================================================

import React from "react";

import { Configuraton } from "../../../../../../configuration";
import { Formatting } from "../../../global.reducer";
import { NavigationItem } from "../../../global.reducer";

// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace NavigationList {

    // * =========================================================================
    // * DATA STRUCTURES
    // * =========================================================================

    export type Props = {

    }

    export type State = {

    }

    export type Context = {

    }

    // * =========================================================================
    // * REACT COMPONENTS
    // * =========================================================================

    export class Component extends React.Component<Props, State> {

        constructor(props: Props) {

            super(props);

            this.state = {

            }

        }

        render(): React.ReactNode {

            let navigationItems: Array<JSX.Element> = [];

            console.log(Formatting.String.toArray("This_is_A_est"))

            Configuraton.routing.map((route) => {

                const renderCondition = route.options?.navigation_hidden;

                if (renderCondition === undefined || !renderCondition) {

                    const formattedName = Formatting.String.toKebabCase(route.name);

                    navigationItems.push(
                        <li 
                            key={ `navigation__list-item--${formattedName}` }
                            className={
                                [
                                    `navigation__list-item--${formattedName}`
                                ].join("")
                            }
                        >

                            <NavigationItem.Component route={ route }/>
                        
                        </li>
                    )

                }

            });

            return (

                <ul className="navigation__list">
                    
                    { navigationItems }

                </ul>

            );

        }

    }

}