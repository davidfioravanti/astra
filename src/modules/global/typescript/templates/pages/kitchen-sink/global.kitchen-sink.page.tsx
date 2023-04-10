// * =========================================================================
// * IMPORTS
// * =========================================================================

import React from "react";

import { Configuraton } from "../../../../../../configuration";
import { CSS } from "../../../global.reducer";
import { Foldable } from "../../../global.reducer";
import { Icon } from "../../../global.reducer";
import { Link } from "react-router-dom";

// * =========================================================================
// * EXPORTS
// * =========================================================================

/**
 * A namespace that contains all of the data structures and React components 
 * related to the "kitchen_sink" page.
 * @version 0.1.0
 */

export namespace KitchenSink {

    // * =========================================================================
    // * DATA STRUCTURES
    // * =========================================================================

    export type Props = {

    }

    export type State = {
        
    }

    export type Context = {

    }

    // * =========================================================================
    // * REACT COMPONENTS 
    // * =========================================================================

    export class Page extends React.Component<Props, State> {

        constructor(props: Props) {

            super(props);

            this.state = {

            }

        }

        renderColorsSection() {

            const { global } = CSS.getVariables();

            let colorsArr : Array<JSX.Element> = [];

            for (const [p, [property, value]] of Object.entries(Object.entries(global.colors))) {

                colorsArr.push(

                    <div className="kitchen-sink__color-container" key={ p }>

                        <span className="kitchen-sink__color-label">

                            { property }
                        
                        </span>

                        <span
                            className="kitchen-sink__color-value"
                            style={
                                { 
                                    color: CSS.calculateContrastFG(value),
                                    backgroundColor: value
                                }
                            }
                        >

                            { value }
                        
                        </span>

                    </div>

                )

            }

            return (

                <Foldable.Component
                    className="kitchen-sink__foldable--colors"
                    label="Colors"
                    options={{
                        icon: Icon.Types.Palette
                    }}
                >

                    <div className="kitchen-sink__wrapper kitchen-sink__wrapper--colors">

                        { colorsArr }

                    </div>

                </Foldable.Component>
            );

        }

        renderIconsSection() : JSX.Element {

            let iconArr : Array<JSX.Element> = [];

            Object.values(Icon.Types).forEach((type) => {

                iconArr.push(
                    <div className="kitchen-sink__icon-container" key={ type }>

                        <span className="kitchen-sink__icon-label">

                            { type }
                        
                        </span>

                        <Icon.Component type={ type } className="kitchen-sink__icon"/>

                    </div>
                );
            
            });

            return (

                <Foldable.Component 
                    className="kitchen-sink__foldable--icons"
                    label="Icons"
                    options={{
                        icon: Icon.Types.Category
                    }}
                >

                    <section className="kitchen-sink__section--icons kitchen-sink__section">

                        <div className="kitchen-sink__wrapper--icons kitchen-sink__wrapper">

                            { iconArr }

                        </div>

                    </section>

                </Foldable.Component>

            );

        }

        renderRoutesSection() : JSX.Element {

            let routeArr : Array<JSX.Element> = [];

                Configuraton.routing.forEach((route, index) => {

                    routeArr.push(

                        <div className="kitchen-sink__route-container" key={ index }>

                            <Link className="kitchen-sink__route" to={ route.path }>

                                <span className="kitchen-sink__route-label">

                                    { route.name } ({ route.path })

                                </span>

                            </Link>

                        </div>
                    
                    )

                });

                return (

                    <Foldable.Component
                        className="kitchen-sink__foldable--routes"
                        label="Routes"
                        options={{
                            icon: Icon.Types.Link
                        }}
                    >

                        <div className="kitchen-sink__wrapper--routes">

                            { routeArr }

                        </div>
                        
                    </Foldable.Component>

                )

        }
        
        renderTypographySection() : JSX.Element {

            const { global } = CSS.getVariables();

            return (

                <Foldable.Component
                    className="kitchen-sink__foldable--typography"
                    label="Typography"
                    options={{
                        icon: Icon.Types.FontDownload
                    }}
                >

                    <div className="kitchen-sink__typography-wrapper">

                        <span 
                            className={
                                [
                                    "kitchen-sink__typography-font-family",
                                    "kitchen-sink__typography-font-family--primary"
                                ].join(" ")
                            }
                            aria-hidden="true"
                        >

                            Primary Font ({ global.font_families.primary })

                        </span>

                        <div className="kitchen-sink__typography-container">

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h1--primary"
                                    ].join(" ")
                                }
                            >
                                Font Size - H1 ({ global.font_sizes.h1 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h2--primary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H2 ({ global.font_sizes.h2 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h3--primary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H3 ({ global.font_sizes.h3 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h4--primary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H4 ({ global.font_sizes.h4 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h5--primary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H5 ({ global.font_sizes.h5 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h6--primary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H6 ({ global.font_sizes.h6 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-body",
                                        "kitchen-sink__typography-root--primary"
                                    ].join(" ")
                                }
                            >

                                Font Size - Root ({ global.font_sizes.root })

                            </span>

                        </div>

                        <span 
                            className={
                                [
                                    "kitchen-sink__typography-font-family",
                                    "kitchen-sink__typography-font-family--secondary"
                                ].join(" ")
                            }
                            aria-hidden="true"
                        >

                                Secondary Font ({ global.font_families.secondary })

                        </span>

                        <div className="kitchen-sink__typography-container">

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h1--secondary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H1 ({ global.font_sizes.h1 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h2--secondary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H2 ({ global.font_sizes.h2 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h3--secondary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H3 ({ global.font_sizes.h3 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h4--secondary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H4 ({ global.font_sizes.h4 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h5--secondary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H5 ({ global.font_sizes.h5 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-heading",
                                        "kitchen-sink__typography-h6--secondary"
                                    ].join(" ")
                                }
                            >

                                Font Size - H6 ({ global.font_sizes.h6 })

                            </span>

                            <span 
                                className={
                                    [
                                        "kitchen-sink__typography-body",
                                        "kitchen-sink__typography-root--secondary"
                                    ].join(" ")
                                }
                            >

                                Font Size - Root ({ global.font_sizes.root })

                            </span>

                        </div>

                    </div>
                    
                </Foldable.Component>

            )

        }

        render(): React.ReactNode {
            
            return (

                <article className="kitchen-sink__page page">

                    <header className="kitchen-sink__header">

                        <h1 className="kitchen-sink__page-heading">
                            
                            Kitchen Sink
                            
                        </h1>

                    </header>

                    <section className="kitchen-sink__section">

                        <div className="kitchen-sink__introduction">

                            <p className="kitchen-sink__paragraph">

                                    Here you will find everything <i>&quot;but&quot;</i> the kitchen sink. 
                                This page displays configuration information and provides visual examples
                                of how content will be displayed throughout the application. The list below
                                includes all of the Kitchen Sink features. If any of the sections are not
                                rendering as you would expect, there is likely a configuration issue.

                            </p>

                            <ul className="kitchen-sink__list">

                                <li className="kitchen-sink__list-item">

                                    Links to each of the application's configured routes.

                                </li>
                                
                                <li className="kitchen-sink__list-item">

                                    A list of all color variables that are wired up in stylesheets and their expected outputs.

                                </li>

                                <li className="kitchen-sink__list-item">

                                    A list of all available icons and their associated identifiers.

                                </li>
                                

                            </ul>

                        </div>
                        
                    </section>

                    <section className="kitchen-sink__section">

                        { this.renderRoutesSection() }

                        { this.renderColorsSection() }

                        { this.renderIconsSection() }

                        { this.renderTypographySection() }

                    </section>

                </article>

            )

        }

    }
    
}