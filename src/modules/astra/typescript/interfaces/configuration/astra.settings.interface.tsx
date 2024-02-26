// * ===========================================================================
// * Version Type
// * ===========================================================================

/**
 *     A type that contains fields used to identify the version of the Astra
 * framework that is currently installed.
 * @version 0.1.0
 */
export type Version = {
    /**
     * The major version of the Astra framework that is currently installed.
     * @version 0.1.0
     */
    major: Readonly<number>,
    /**
     * The minor version of the Astra framework that is currently installed.
     * @version 0.1.0
     */
    minor: Readonly<number>,
    /**
     * The patch version of the Astra framework that is currently installed.
     * @version 0.1.0
     */
    patch: Readonly<number>,
    /**
     * The prerelease version of the Astra framework currently installed.
     * @example `alpha`, `beta.1`, `rc.3`
     * @version 0.1.0
     */
    pre_release?: Readonly<string>
}

// * ===========================================================================
// * Settings Type 
// * ===========================================================================

/**
 * A type encapsulating settings specific to the Astra framework.
 * @version 0.1.0
 */
export type Settings = {
    /**
     * The version of the Astra framework that is currently installed.
     * @version 0.1.0
     */
    version: Readonly<Version>
}