# ASTRA

| Version | v0.1.0                     |
| ------- | -------------------------- |

## Introduction

ASTRA (short for "*A Scalable Typescript & React Application*") is a framework/starter used to build React applications in a type-safe, modular and maintainable way. It utilizes a module-centric architecture that separates core functionality from custom application logic.

## Core Principles

The core principles for developing and working within the ASTRA ecyosystem are simple:

- Anything outside of the `modules` directory (`index.tsx`, `configuration.tsx`, etc) exists to "wire-up" the application. This includes all of the configuration, routing, and initialization required in order for the app to run.

- Anything inside of the `astra` module acts like an API that any other module can inherit from or consume. This includes interfaces, templates, and assets that act as the "engine" of the application. 

- The `astra` module should be treated as **READ ONLY** and **NOT** use or contains references to any files outside of it. Modifying these files has essentially the same consequences as *ejecting* a Create React App.

- Custom code for you application should exist within it's own module and use the `astra` module as a dependency. This allows us to version the `astra` module and update it's features independently.

## Naming Conventions

- Use kebab-case for all file and folder names, regardless of type.
  - E.g. `some-typescript-file.tsx`
  - E.g. `example.png`

- Folders with descriptive single-word names are preffered.
  - E.g. `src/modules/astra/assets`

- If a file exists within a module directory (e.g. `astra`), the file name should have a prefix, title, type, and file extension seperated by periods (`module-name.file-name.file-type.extension`):
  - E.g. `astra.example.component.tsx`
    - "astra" is the module the file exists as a part of.
    - "example" is the name or "title" of the file.
    - "component" is a "type" description of what the file is.
    - ".tsx" is the file extension.
  - E.g. `_theme.example.component.scss`
  - E.g. `theme.css.api.tsx`

