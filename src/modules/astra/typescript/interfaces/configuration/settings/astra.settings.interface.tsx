// * ===========================================================================
// * Version Type
// * ===========================================================================

/**
 *     A type that contains fields used to identify the version of the ASTRA
 * framework that is currently installed.
 * @version 0.1.0
 */
type Version = {
    /**
     * The major version of ASTRA that is currently installed.
     * @version 0.1.0
     */
    major: Readonly<number>,
    /**
     * The minor version of ASTRA that is currently installed.
     * @version 0.1.0
     */
    minor: Readonly<number>,
    /**
     * The patch version of ASTRA that is currently installed.
     * @version 0.1.0
     */
    patch: Readonly<number>,
    /**
     * The release version of astra framework currently installed.
     * @version 0.1.0
     */
    release: Readonly<string>,
    /**
     *     A short description that depicts the purpose of
     * the release version (e.g. a new feature set).
     */
    designation: Readonly<string>
}

// * ===========================================================================
// * Settings Type 
// * ===========================================================================

/**
 * A type encapsulating settings specific to the ASTRA framework.
 * @version 0.1.0
 */
export type Settings = {
    /**
     * The version of ASTRA that is currently installed.
     * @version 0.1.0
     */
    version: Readonly<Version>
}