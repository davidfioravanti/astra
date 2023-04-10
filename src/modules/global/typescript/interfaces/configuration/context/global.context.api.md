# Global - Context API

| Version | v0.1.0 |
| ------- | ------ |

## Introduction

The `configuration.tsx` file in the `src` directory allows us to quickly and easily modify application variables in a central place. The `modules` property of that namespace contains a structured list of variables under it's `context` object. Context encapsulates all of the configuration variables that are made available to interfaces and templates before their instantiation and initialization. These context variables can serve any purpose, but the following are common use-cases:

- Passing language variables to a page template to dynamically inject text that is modified in `configuration.tsx`.
    - This removes the need to edit the template file directly, and instead manage text content in the configuration file.

- Setting a default value that is used by all instances of a component (e.g. "show_by_default").
    - If you want to set a particular value across all instances of a component, without having to pass it as props in the component call, you can use the configuration file instead.
    - This can also act as the "default" value which can be overriden by props passed to the component. 

## Working With Context

Context ensures that type safe configuration data is made available to interfaces and templates throughout the application. Three files have to "match up" in order to create, use, or modify context:

1. `configuration.tsx`
2. `global.context.api.tsx`
3. The interface/template file that defines context specifications.

The following example snippets illustrate the contextual relationship between these three files:

- The `global.context.api.tsx` file must import the interface/template and create a field in the exported `Context` type to store the associated context variables.

```tsx
// ===========================================================
// global.context.api.tsx
// ===========================================================

import { Example } from "../../path";

export type Context = {

    components: {

        example: Example.Context

    }

}
```

- The `configuration.tsx` file must consume the `Context` interface and account for all of it's defined variables.

```tsx
// ===========================================================
// configuration.tsx
// ===========================================================

import { Context } from "./path";

export type Modules = {

    global: {

        context: Readonly<Context>

    }

}

export const modules : Modules = {

    global: {

        context: {

            components: {

                example: {

                    foo: "foo",
                    bar: "bar"
                    
                }

            }

        }

    }

}
```

- The interface/template file that has context must export a `Context` type that explicitly specifies what variables are expected to be included in `configuration.tsx`. 
    - The context variables established in the `Configuration` namespace should be consumed by the interface/template and used accordingly.

```tsx
// ===========================================================
// global.example.component.tsx
// ===========================================================

import { Configuration } from "../path/to/configuration.tsx";

export namespace Example {

    // # ===========================================================
    // # DATA STRUCTURES
    // # ===========================================================

    export type Props = {}

    export type State = {}

    export type Context = {

        foo: string
        bar: string

    }

    // # ===========================================================
    // # REACT COMPONENTS
    // # ===========================================================

    export class Component extends React.Component<Props, State> {

        context: Example.Context

        constructor(props: Props) {

            super(props);

        }

        this.state = {};

        this.context = Configuration
            .modules
            .global
            .context
            .components
            .example;

        console.log(`${this.context.foo}${this.context.bar}`);

        // ---------------------------------------------------
        // Expected output: "foobar"
        // ---------------------------------------------------

    }

}
```

## Versioning Context

Context variables should be treated like interfaces and templates in the sense that their properties have JSDocs explaining their purpose and include a version identifier.

```tsx
export type Context = {

    /**
     * An object containing component settings.
     * @version 0.1.0
     */

    settings: {

        /**
         * A boolean value that determines whether or
         * not the component is enabled.
         * @version 0.1.0
         */

        is_enabled: Boolean

    }

}
```

## Context vs. React Component Props

It may seem redundant to have two ways to pass data to a component, but there is a fundamental difference between *Context* and React *Component Props*. Props are specific to individual instances of a component whereas context applies to the component (and all of it's instances) as a whole. This is useful for setting global properties on a component or creating default values that a component's props can overwrite.