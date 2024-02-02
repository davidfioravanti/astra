// * ===========================================================================
// * Mathematics Namespace
// * ===========================================================================

export namespace Mathematics {

    /**
     *     A one-dimensional vector containing a single numeral 
     * represented by the variable `x`.
     * @version 0.1.0
     */
    export type Vector1 = {
        x: number,
    }

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
     * An array of one-dimensional vectors.
     * @version 0.1.0
     */
    export type Vector1Array = Array<Vector1>;

    /**
     * An array of two-dimensional vectors.
     * @version 0.1.0
     */
    export type Vector2Array = Array<Vector2>;

    /**
     * An array of three-dimensional vectors.
     * @version 0.1.0
     */
    export type Vector3Array = Array<Vector3>;

    /**
     *     A namespace containing functions and data structures 
     * used in simple arithmetic.
     */
    export namespace Arithmetic {

    }

}