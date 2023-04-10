// * =========================================================================
// * IMPORTS
// * =========================================================================

import { Icon } from "../../../global.reducer";
import { NonIndexRouteObject } from "react-router-dom";

// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace Routing {

    export interface Route extends NonIndexRouteObject {

        /**
         * The name of the route that will be displayed
         * in the application UI.
         * @version 0.0.0
         */

        name: Readonly<string>,

        /**
         * The path that corresponds to the given page, which
         * React Router will render when the user navigates to that path.
         * @version 0.1.0
         */

        path: string,

        /**
         * The element (page) that will render when the user
         * navigates to the given path.
         * @version 0.1.0
         */
        
        element: JSX.Element,

        /**
         * An optional icon type used to associate an icon
         * with a route that can be displayed alongside of it.
         * @version 0.1.0
         */

        icon?: Icon.Type

    }

}