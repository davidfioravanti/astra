// * ===========================================================================
// * Imports
// * ===========================================================================

import { NonIndexRouteObject } from "react-router-dom";

// * ===========================================================================
// * Routing Namespace
// * ===========================================================================

/**
 *     A namespace containing all of the routing related data types 
 * used throughout the application.
 * @readonly
 * @version 0.1.0
 */
export namespace Routing {

    // * ===========================================================================
    // * Route Interface
    // * ===========================================================================
    
    /**
     *     An interface encapsulating all of the data used to create
     * a route used by the Astra framework.
     * @readonly
     * @version 0.1.0
     */
    export interface Route extends NonIndexRouteObject {
        /**
         *     The name of the route that will be displayed in
         * the application UI.
         * @readonly
         * @version 0.1.0
         */
        name: Readonly<string>,
        /**
         *     The path that corresponds to the given page, which
         * React Router will render when the user navigates to that path.
         * @readonly
         * @version 0.1.0
         */
        path: string,
        /**
         *     The element (page) that will render when the user
         * navigates to the given path.
         * @readonly
         * @version 0.1.0
         */
        element: JSX.Element,
        /**
         *     An optional string property that associates an icon
         * with the route. Intended to be used with the Google Fonts
         * integration.
         * @readonly
         * @version 0.1.0
         */
        icon?: string
    }

    /**
     * An array of routes used by the Astra framework.
     * @readonly
     * @version 0.1.0
     */
    export type RouteArray = Array<Route>;

}