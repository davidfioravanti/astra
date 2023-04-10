// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace Formatting {

    export namespace ANSI {
        
    }

    export namespace Time {

        export function getDate() : string {

            const date = new Date();
    
            const y = date.toLocaleString("default", { year: "numeric" });
            const m = date.toLocaleString("default", { month: "2-digit" });
            const d = date.toLocaleString("default", { day: "2-digit" });
    
            return `${y}/${m}/${d}`;
    
        }

    }

}