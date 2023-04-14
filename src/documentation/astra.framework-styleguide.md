# ASTRA - Styleguide

| Version | v0.1.0                     |
| ------- | -------------------------- |

## Introduction

This document serves as a styleguide to ensure code consistency and readability throughout the ASTRA framework.

## SCSS

### Variables, Mixins, and Functions

In order to introduce scope and specificity to SCSS variables/mixins/functions, a [BEM-like](https://getbem.com/) naming convention is used. Each of the four parts of the name is separated by a series dashes or underscores further describing it's intended function.

1. `MODULE`
    - The module that the SCSS file resides in (e.g. global, common)
2. `ELEMENT`
    - The specific element scope that the variable/mixin will target
3. `PROPERTY`
    - The specific property that this variable mixin will control.
4. `MODIFIER`
    - A variant of the collective module, element and property.

It is important to note that variables/mixins/functions within the `global` module omit the `MODULE` portion of the name. This allows for better
intellisense as these properties will appear first (alphabetically).

#### Generic Variables
Variables that exist to be used generically throughout the application are referred to as *Generic Variables*. These variable names follow the `MODULE----PROPERTY--MODIFIER` format:

```scss
// Global Module:
$----breakpoint-small: 320px;
$----color--primary: #ffffff;

// Common Module:
$common----color--red: #ffffff;
$common----font-family: Arial;
```

#### Element Variables

Variables that are scoped to specific page elements or HTML tags are referred to as *Element Variables*. These variable names follow the
`MODULE--ELEMENT__PROPERTY--MODIFIER` format:

```scss
// Global Module:
$--button-primary__background-color: #ffffff;
$--button-primary__background-color--active: #ffffff;

// Common Module:
$common--input__background-color: #ffffff;
$common--input__background-color--active: #ffffff;
```