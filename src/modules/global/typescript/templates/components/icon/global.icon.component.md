# Global - Icon Component

| Version | v0.1.0                     |
| ------- | -------------------------- |

## Introduction

The application utilizes [Google Icons](https://fonts.google.com/icons?icon.set=Material+Icons) as it's primary icon strategy. Google's assets are much easier to manage and far more performant than most DIY icon solutions. Essentially, these icons are packed into a font file and referenced using a typograhic feature known as *ligatures*.

## Google Icons Configuration

Setting up Google Icons requires no download or integration. It's as simple as including the following stylesheet link in the `<head>` tag of `index.html`.


```html
<!-- index.html -->

<!-- ============================================================= -->
<!-- Include a link to Google's CDN to get icons and stylesheets. -->
<!-- ============================================================= -->

<link 
    href="https://fonts.googleapis.com/icon?family=Material+Icons" 
    rel="stylesheet"
>
```

## Using the Icon Component

- The icon component accepts one if it's *types* in it's props that will determine what icon it will render as.

```tsx
// ========================================================
// global.icon.component.tsx:
// ========================================================

export namespace Icon {

    // ============================================================
    //     The members of this enum correspond to icons available
    // in the Google Icons font. When a type is passed as a prop,
    // the type enums "value" will be added icon element text.
    // ============================================================

    export enum Types = {

        Add = "add",
        RadioButtonChecked = "radio_button_checked" 
        // ...
        // ...
        // ...

    }

    export type Type = Types;

    export type Props = { type: Type }

    export class Component<Props, State> extends React.Component {

        render(): React.ReactNode {
    
            return (

                // ===========================================================
                //     Using a typography feature called "ligatures", the type
                // text will be replaced with the actual icon. 
                // ===========================================================

                <i className="material-icons">{ this.props.type }</i>
                
            )

        }

    }

}
```

- In another file, call `Icon.Component` and pass the type of icon you want to render as an icon component props.

```tsx
// =============================================================
// Consume the Icon Component by passing the icon type.
// =============================================================

<Icon.Component type={Icon.Types.RadioButtonChecked} />
```