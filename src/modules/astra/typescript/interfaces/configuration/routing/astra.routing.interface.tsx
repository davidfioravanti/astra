// * ===========================================================================
// * Imports
// * ===========================================================================

import { NonIndexRouteObject } from "react-router-dom";

// * ===========================================================================
// * Routing Namespace
// * ===========================================================================

/**
 *     A namespace containing all of the routing related data types 
 * used throughout every ASTRA application.
 * @version 0.1.0
 */
export namespace Routing {

    // * ===========================================================================
    // * Route Interface
    // * ===========================================================================
    
    /**
     *     An interface encapsulating all of the data used to create
     * a route used by the ASTRA framework.
     * @version 0.1.0
     */
    export interface Route extends NonIndexRouteObject {
        /**
         *     The name of the route that will be displayed in
         * the application UI.
         * @version 0.1.0
         */
        name: Readonly<string>,
        /**
         *     The path that corresponds to the given page, which
         * React Router will render when the user navigates to that path.
         * @version 0.1.0
         */
        path: string,
        /**
         *     The element (page) that will render when the user
         * navigates to the given path.
         * @version 0.1.0
         */
        element: JSX.Element
    }

}