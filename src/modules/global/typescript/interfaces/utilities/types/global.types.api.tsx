// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace Types {

    export type RequireAll<T> = {

        [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>> ? T[P] : (T[P] | undefined);

    }

}