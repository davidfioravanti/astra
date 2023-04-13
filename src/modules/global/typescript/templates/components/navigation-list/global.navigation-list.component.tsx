// * =========================================================================
// * IMPORTS
// * =========================================================================

import React from "react";

import { Configuraton } from "../../../../../../configuration";
import { Formatting } from "../../../global.reducer";
import { NavigationItem } from "../../../global.reducer";
import { Routing } from "../../../global.reducer";

// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace NavigationList {

    // * =========================================================================
    // * DATA STRUCTURES
    // * =========================================================================

    export type Props = {

        routing?: Routing

    }

    export type State = {

    }

    export type Context = {

    }

    // * =========================================================================
    // * REACT COMPONENTS
    // * =========================================================================

    export class Component extends React.Component<Props, State> {

        ctx: Context;

        constructor(props: Props) {

            super(props);

            this.state = {

            }

            this.ctx = Configuraton
                .modules
                .global
                .context
                .components
                .navigation_list;

        }

        render(): React.ReactNode {

            let navigationItems: Array<JSX.Element> = [];

            const routes = this.props.routing != undefined 
                ? this.props.routing 
                : Configuraton.routing;

            routes.map((route) => {

                const renderCondition = route.options?.navigation_hidden;

                if (renderCondition === undefined || !renderCondition) {

                    const formattedName = Formatting.String.toKebabCase(route.name);

                    navigationItems.push(

                        <li 
                            key={ `navigation__list-item--${formattedName}` }
                            className={
                                [
                                    `navigation__list-item--${formattedName}`,
                                    `navigation__list-item`
                                ].join(" ")
                            }
                        >

                            <NavigationItem.Component route={ route }/>
                        
                        </li>

                    );

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