// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

import * as Astra from "./modules/astra/typescript/astra.reducer";
import * as Theme from "./modules/theme/typescript/theme.reducer";

// * ===========================================================================
// * Configuration Exports
// * ===========================================================================

/**
 *     A type that defines all of the configuration data 
 * for the modules used throughout the application.
 * @version 0.1.0
 */
export type Modules = {
    /**
     *     The configuration object for the version of
     * Astra's framework that is currently installed.
     * @readonly
     * @version 0.1.0
     */
    astra: {
        /**
         *     The settings configuration for the version of
         * Astra's framework that is currently installed.
         * @readonly
         * @version 0.1.0
         */
        settings: Readonly<Astra.Settings>,
    },
    /**
     *     An object that contains all of the configuration data 
     * specific to the theme.
     * @version 0.1.0
     */
    theme: {

    }
}

/**
 *     A namespace containing all of the configuration data
 * used within the application.
 * @version 0.1.0
 */
export namespace Configuration {

    /**
     *     An object that contains all of the configuration data
     * for all of the modules used throughout the application.
     * @version 0.1.0
     */
    export const modules : Modules = {
        astra: {
            settings: {
                version: {
                    major: 0,
                    minor: 1,
                    patch: 0,
                    pre_release: "alpha",
                }
            }
        },
        theme: {

        }
    }

    /**
     *     The routing configuration that that will be used to
     * render the application.
     * @version 0.1.0
     */
    export const routing : Astra.Routing.RouteArray = [
        {
            name: "Home",
            path: "/",
            element: <Theme.KitchenSink.Page />
        }
    ]
    
}