// * ===========================================================================
// * Types Namespace
// * ===========================================================================

/**
 * A namespace containing utlity types used throughout the Astra framework.
 * @version 0.1.0
 */
export namespace Utilities {
    
    /**
     * A utility type that dynamically makes all properties of a given type required.
     * @param T - The given type whose properties will be required.
     * @version 0.1.0
     */
    export type RequireAll<T> = {
        [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : (T[P] | undefined);
    }

}