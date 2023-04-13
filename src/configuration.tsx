// * =========================================================================
// * IMPORTS - CONFIGURATON
// * =========================================================================

import * as Common from "./modules/common/typescript/common.reducer";
import * as Global from "./modules/global/typescript/global.reducer";

// * =========================================================================
// * EXPORTS
// * =========================================================================

export type Modules = {

    global: {

        settings: Readonly<Global.Settings>,
        context: Readonly<Global.Context>

    },

    common: {

        context: Readonly<Common.Context>

    }

}

export namespace Configuraton {

    // * =========================================================================
    // * MODULE CONFIGURATION
    // * =========================================================================

    export const modules : Modules = {

        global: {

            settings: {

                name: "",
    
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

                    navigation_item: {

                    },

                    navigation_list: {
                        
                    }

                },

                layouts: {

                },

                pages: {

                    kitchen_sink: {

                    },

                },

            },

        },

        common: {

            context: {

                components: {
                    
                },

                layouts: {
                    
                },

                pages: {

                    home: {

                        language: {

                            headings: {

                                page_title: "Home"

                            }

                        }
                        
                    },

                },

            },

        },

    };

    // * =========================================================================
    // * ROUTING CONFIGURATION
    // * =========================================================================

    const { settings } = Configuraton.modules.global;

    export const routing : Global.Routing = [
        {
            name: "Home",
            path: settings.in_development ? "/home" : "/",
            element: <Common.Home.Page />
        },
        {
            name: "Kitchen Sink",
            path: settings.in_development ? "/" : "/kitchen-sink",
            element: <Global.KitchenSink.Page />,
            options: {
                navigation_hidden: false
            }
        }
    ];

}