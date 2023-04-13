# ASTRA - Styleguide

| Version | v0.1.0                     |
| ------- | -------------------------- |

## Introduction

This document serves as a styleguide to ensure code consistency and readability throughout the ASTRA framework.

## SCSS

### Generic Variables
Variables that exist to be used generically throughout the application are referred to as *Generic Variables*. These variable names follow a specific format:

```
MODULE----PROPERTY--MODIFIER
```

- The `MODULE` part of the name is the name of the module that the SCSS file is in (unless it belongs to the `global` module, in which case the prefix is ommited).
- The `PROPERTY` part of the name is the style property that this variable will control.
- The `MODIFIER` part of the name denotes a variant of the property.

```scss
// ========================================================
// GENERIC VARIABLES
// ========================================================

$----breakpoint--small: 320px;
$----color--primary: #ffffff;

$common----color--red: #ffffff;
$common----font-family: Arial;
```

### Element Variables

Variables that are scoped to specific page elements or HTML tags are referred to as *Element Variables*. These variable names follow a specific format:

```
MODULE--ELEMENT__PROPERTY--MODIFIER
```

- The `MODULE` part of the name is the name of the module that the SCSS file is in (unless it belongs to the `global` module, in which case the module prefix is omitted).
- The `ELEMENT` part of the name is the name of the element of HTML tag that the variable is scoped to.
- The `PROPERTY` part of the name is the style property of the element that this variable will control.
- The `MODIFIER` part of the name denotes a variant of the property based on the element's state.

```scss
// ========================================================
// ELEMENT VARIABLES 
// ========================================================

$--button-primary__background-color: #ffffff;
$--button-primary__background-color--active: #ffffff;

$common--input__background-color: #ffffff;
$common--input__background-color--active: #ffffff;
```