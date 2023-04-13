// * =========================================================================
// * IMPORTS
// * =========================================================================

import React from "react";

import { Configuraton } from "../../../../../../configuration";
import { Icon } from "../../../global.reducer";
import { Link } from "react-router-dom";
import { Routing } from "../../../global.reducer";

// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace NavigationItem {

    // * =========================================================================
    // * DATA STRUCTURES
    // * =========================================================================

    export type Props = {

        route: Routing.Route

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
                .navigation_item;

            console.log(this)

        }

        render(): React.ReactNode {

            console.log(this.ctx)
            
            return (

                <Link
                    to={ this.props.route.path }
                    className="navigation-item"
                >
                    {
                        this.props.route?.icon
                            ? (
                                <>
                                    <Icon.Component className="navigation-item__icon" type={ this.props.route.icon } />
                                    <span className="navigation-item__label">
                                        { this.props.route.name }
                                    </span>
                                </>
                            )
                            : this.props.route.name
                    }
                </Link>

            )

        }

    }

}