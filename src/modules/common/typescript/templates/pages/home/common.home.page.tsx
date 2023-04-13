// * =========================================================================
// * IMPORTS
// * =========================================================================

import React from "react";
import { Configuraton } from "../../../../../../configuration";
import { NavigationList } from "../../../../../global/typescript/global.reducer";

// * =========================================================================
// * EXPORTS
// * =========================================================================

export namespace Home {

    // * =========================================================================
    // * DATA STRUCTURES
    // * =========================================================================

    export type Props = {

    }

    export type State = {

    }

    export type Context = {

        language: {

            headings: {

                page_title: string

            }

        }

    }

    // * =========================================================================
    // * REACT COMPONENTS
    // * =========================================================================

    export class Page extends React.Component<Props, State> {

        ctx: Context;

        constructor(props: Props) {

            super(props);

            this.state = {

            }

            this.ctx = Configuraton.modules.common.context.pages.home

        }

        render(): React.ReactNode {

            console.log(this.ctx)
            
            return (

                <article className="home__page page">

                    <header className="home__header">

                        <h1 className="home__page-heading">

                            { this.ctx.language.headings.page_title }

                        </h1>

                    </header>

                    <section className="home__section">

                        <NavigationList.Component />
                        
                    </section>

                </article>

            )

        }

    }


}