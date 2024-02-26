// * ===========================================================================
// * Mathematics Namespace
// * ===========================================================================

/**
 *     A namespace containing utility functions and data structures
 * that are used for mathematical computation.
 * @version 0.1.0 
 */
export namespace Mathematics {

    // * ===========================================================================
    // * Mathematical Types - Vectors
    // * ===========================================================================

    /**
     *     A one-dimensional vector containing a single numeral 
     * represented by the variable `x`.
     * @version 0.1.0
     */
    export type Vector1 = {
        x: number,
    }

    /**
     * An array of one-dimensional vectors.
     * @version 0.1.0
     */
    export type Vector1Array = Array<Vector1>;

    /**
     *     A two-dimensional vector containing two numerals represented 
     * by the variables `x` and `y`.
     * @version 0.1.0
     */
    export type Vector2 = {
        x: number,
        y: number,
    }

    /**
     * An array of two-dimensional vectors.
     * @version 0.1.0
     */
    export type Vector2Array = Array<Vector2>;

    /**
     *     A three-dimensional vector containing three numerals represented 
     * by the variables `x`, `y`, and `z`.
     * @version 0.1.0
     */
    export type Vector3 = {
        x: number,
        y: number,
        z: number,
    }

    /**
     * An array of three-dimensional vectors.
     * @version 0.1.0
     */
    export type Vector3Array = Array<Vector3>;

    // * ===========================================================================
    // * Artihmetic Namespace
    // * ===========================================================================

    /**
     *     A namespace containing functions and data structures 
     * used in simple arithmetic.
     * @version 0.1.0
     */
    export namespace Arithmetic {

    }

}