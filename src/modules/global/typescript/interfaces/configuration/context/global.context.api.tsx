// * =========================================================================
// * COMPONENT IMPORTS
// * =========================================================================

import { Foldable } from "../../../global.reducer";
import { Icon } from "../../../global.reducer";
import { NavigationItem } from "../../../global.reducer";
import { NavigationList } from "../../../global.reducer";

// * =========================================================================
// * PAGE IMPORTS
// * =========================================================================

import { KitchenSink } from "../../../global.reducer";

// * =========================================================================
// * EXPORTS
// * =========================================================================

export type Context = {

    components: {

        foldable: Foldable.Context,
        icon: Icon.Context,
        navigation_item: NavigationItem.Context,
        navigation_list: NavigationList.Context

    },

    layouts: {

    },

    pages: {
        
        kitchen_sink: KitchenSink.Context

    }
    
};