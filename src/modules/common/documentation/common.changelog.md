# Common - CHANGELOG

| Version | v0.1.0                     |
| ------- | -------------------------- |

## Introduction

This document contains all of the changes to the `common` module by version.

## v0.1.0

### Features

- Add page templates: <sup>[#1]</sup>

    - Add `Home` page
        - [common.home.page.md](../typescript/templates/pages/home/common.home.page.md)
        - [common.home.page.tsx](../typescript/templates/pages/home/common.home.page.tsx)

- Add configuration interfaces: <sup>[#1]</sup>

    - Add `Context` API
        - [common.context.api.md](../typescript/interfaces/configuration/context/common.context.api.md)
        - [common.context.api.tsx](../typescript/interfaces/configuration/context/common.context.api.tsx)

- Add SCSS files: <sup>[#1]</sup>
    - [_common.mixins.scss](../assets/scss/_common.mixins.scss)
    - [_common.resets.scss](../assets/scss/_common.resets.scss)
    - [_common.utilities.scss](../assets/scss/_common.utilities.scss)
    - [_common.variables.scss](../assets/scss/_common.variables.scss)
    - [common.index.scss](../assets/scss/common.index.scss)

- Add page template SCSS files: <sup>[#1]</sup>
    - [_common.home.page.scss](../assets/scss/templates/pages/_common.home.page.scss)

### Refactors

- N/A

### Bug Fixes

- N/A

[#1]: <https://github.com/davidfioravanti/astra/issues/1> (1-feature/initial-development)