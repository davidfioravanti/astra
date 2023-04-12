// * =========================================================================
// * IMPORTS
// * =========================================================================

import React from "react";

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

        constructor(props: Props) {

            super(props);

            this.state = {

            }

        }

        render(): React.ReactNode {
            
            return (

                <Link
                    to={ this.props.route.path }
                    className="navigation-item"
                >
                    {
                        this.props.route?.icon
                            ? (
                                <>
                                    <Icon.Component type={ this.props.route.icon } />
                                    <span>
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