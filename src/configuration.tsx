// * =========================================================================
// * IMPORTS - CONFIGURATON
// * =========================================================================

import { Context } from "./modules/global/typescript/global.reducer";
import { Routing } from "./modules/global/typescript/global.reducer";
import { Settings } from "./modules/global/typescript/global.reducer";

// * =========================================================================
// * IMPORTS - PAGES
// * =========================================================================

import { KitchenSink } from "./modules/global/typescript/global.reducer";

// * =========================================================================
// * EXPORTS
// * =========================================================================

export type Modules = {

    global: {

        settings: Readonly<Settings>,
        context: Readonly<Context>

    }

}

export namespace Configuraton {

    // * =========================================================================
    // * MODULE CONFIGURATION
    // * =========================================================================

    export const modules : Modules = {

        global: {

            settings: {

                name: "Application",
    
                version: {
            
                    major: 0,
                    minor: 1,
                    patch: 0,
                    
                },

                in_development: true,
                
            },

            context: {

                components: {

                    foldable: {
  
                    },

                    icon: {

                    },

                },

                layouts: {

                },

                pages: {

                    kitchen_sink: {

                    },

                },

            },

        }

    };

    // * =========================================================================
    // * ROUTING CONFIGURATION
    // * =========================================================================

    const { settings } = Configuraton.modules.global;

    export const routing : Array<Routing.Route> = [
        {
            name: "Kitchen Sink",
            path: settings.in_development ? "/" : "/kitchen-sink",
            element: <KitchenSink.Page />
        }
    ];

}