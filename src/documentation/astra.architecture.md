# ASTRA - Architecture

| Version | v0.1.0                     |
| ------- | -------------------------- |

## Introduction

ASTRA is a "starter" upon which you can build any scalable web application using TypeScript and React. The framework consists of a module-centric architecture that provides common features and functionalities that are expanded upon via custom modules.

## Core Principles

The core principles for developing and working within ASTRA's ecosystem are simple:

- Anything outside of the `modules` directory (index.tsx, configuration.tsx, etc) exists to "wire up" the application. This includes all of the configuration, routing, and initialization that the application requires in order to run.

- Anything inside of the `global` module acts like an API that any other module can inherit from or consume. This includes interfaces, templates, and assets that act as the "engine" of the application. The global module should **NOT** use or contain references to any files outside of it.

- Custom code should exist within it's own module and use the global module as a dependency. This allows us to version the global module and update it's features independently.

## Naming Conventions

In order to keep the application easy to navigate and modify, certain naming conventions should be upheld throughout the application. 

### Universal File/Folder Naming Conventions

- Use kebab-case for all file and folder names, regardless of type.
    - E.g. `some-typescript-file.tsx`
    - E.g. `example.png` 
    - E.g. `module-name.file-name.file-type.tsx`
    - E.g `./path/to/some-folder-name`

- Folders with descriptive single-word names are preferred where possible.
    - E.g. `src/modules/global/assets`

- If a file exists within a module directory (e.g. `global`), the file name should have a prefix, title, type, and file extension seperated by periods:
    - E.g. `global.example.component.tsx`
        - *"global"* is the module the file exists as a part of.
        - *"example"* is the name or "title" of the file.
        - *"component"* is a "type" description of what the file is.
        - *".tsx"* is the file extension.
    - E.g. `_global.example.component.scss`
    - E.g. `global.css.api.tsx`