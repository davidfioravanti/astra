# Global - CHANGELOG

| Version | v0.1.0                     |
| ------- | -------------------------- |

## Introduction

This document contains all of the changes to ASTRA's `global` module by version.

## v0.1.0

### Features

- Add component templates: <sup>[#1]</sup>

    - Add `Foldable` component
        - [global.foldable.component.md](../typescript/templates/components/foldable/global.foldable.component.md)
        - [global.foldable.component.tsx](../typescript/templates/components/foldable/global.foldable.component.tsx)

    - Add `Icon` component
        - [global.icon.component.md](../typescript/templates/components/icon/global.icon.component.md)
        - [global.icon.component.tsx](../typescript/templates/components/icon/global.icon.component.tsx)

- Add page templates: <sup>[#1]</sup>

    - Add `Home` page
        - [global.home.page.md](../typescript/templates/pages/home/global.home.page.md)
        - [global.home.page.tsx](../typescript/templates/pages/home/global.home.page.tsx)

    - Add `KitchenSink` page
        - [global.kitchen-sink.md](../typescript/templates/pages/kitchen-sink/global.kitchen-sink.page.md)
        - [global.kitchen-sink.page.tsx](../typescript/templates/pages/kitchen-sink/global.kitchen-sink.page.tsx)

- Add configuration interfaces: <sup>[#1]</sup>

    - Add `Context` interface
        - [global.context.api.md](../typescript/interfaces/configuration/context/global.context.api.md)
        - [global.context.api.tsx](../typescript/interfaces/configuration/context/global.context.api.tsx)

    - Add `Routing` interface
        - [global.routing.api.md](../typescript/interfaces/configuration/routing/global.routing.api.md)
        - [global.routing.api.tsx](../typescript/interfaces/configuration/routing/global.routing.api.tsx)
    
    - Add `Settings` interface
        - [global.settings.api.md](../typescript/interfaces/configuration/settings/global.settings.api.md)
        - [global.settings.api.tsx](../typescript/interfaces/configuration/settings/global.settings.api.tsx)

- Add utility interfaces: <sup>[#1]</sup>

    - Add `CSS` interface
        - [global.css.api.md](../typescript/interfaces/utilities/css/global.css.api.md)
        - [global.css.api.tsx](../typescript/interfaces/utilities/css/global.css.api.tsx)

    - Add `Formatting` interface
        - [global.formatting.api.md](../typescript/interfaces/utilities/formatting/global.formatting.api.md)
        - [global.formatting.api.tsx](../typescript/interfaces/utilities/formatting/global.formatting.api.tsx)

    - Add `Mathematics` interface
        - [global.mathematics.api.md](../typescript/interfaces/utilities/mathematics/global.mathematics.api.md)
        - [global.mathematics.api.tsx](../typescript/interfaces/utilities/mathematics/global.mathematics.api.tsx)

    - Add `Types` interface
        - [global.types.api.md](../typescript/interfaces/utilities/types/global.types.api.md)
        - [global.types.api.tsx](../typescript/interfaces/utilities/types/global.types.api.tsx)

- Add SCSS files: <sup>[#1]</sup>
    - [_global.mixins.scss](../assets/scss/_global.mixins.scss)
    - [_global.resets.scss](../assets/scss/_global.resets.scss)
    - [_global.utilities.scss](../assets/scss/_global.utilities.scss)
    - [_global.variables.scss](../assets/scss/_global.variables.scss)

- Add component template SCSS files: <sup>[#1]</sup>
    - [_global.foldable.component.scss](../assets/scss/templates/components/_global.foldable.component.scss)
    - [_global.icon.component.scss](../assets/scss/templates/components/_global.icon.component.scss)

- Add page template SCSS files: <sup>[#1]</sup>
    - [_global.kitchen-sink.page.scss](../assets/scss/templates/pages/_global.kitchen-sink.page.scss)

### Refactors

- N/A

### Bug Fixes

- N/A

[#1]: <https://github.com/davidfioravanti/astra/issues/1> (1-feature/initial-development)