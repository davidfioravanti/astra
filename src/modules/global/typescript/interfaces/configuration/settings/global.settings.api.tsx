// * =========================================================================
// * EXPORTS
// * =========================================================================

type Version = {

    /**
     * The current major version of the application.
     * @version 0.1.0
     */

    major: Readonly<number>,

    /**
     * The current minor version of the application.
     * @version 0.1.0
     */

    minor: Readonly<number>,

    /**
     * The current patch version of the application.
     * @version 0.1.0
     */

    patch: Readonly<number>,

    /**
     *     The current version modifier of the application.
     * Generally used for release versioning.
     * @version 0.1.0
     */

    modifier?: Readonly<string>,

    /**
     *     A short description that depicts the purpose of
     * the version release (e.g. new feature sets).
     * @version 0.1.0
     */

    designation?: Readonly<string>

}

export type Settings = {

    /**
     *     A field that contains the application name as it should
     * appear throughout the application UI.
     * @version 0.1.0
     */

    name: Readonly<string>,

    /**
     *     An object whose fields denote the current version
     * of the application as it should appear in application UI
     * and for version comparison.
     * @version 0.1.0
     * @see https://semver.org/spec/v2.0.0.html
     */

    version: Readonly<Version>,

    /**
     *     A boolean field that determines whether or not the application
     * should be run in development mode to facilitate testing.

     * @version 0.1.0
     */
    
    in_development: Readonly<Boolean>
    
};