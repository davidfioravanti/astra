// * =========================================================================
// * IMPORTS
// * =========================================================================

import React from "react";

import { Icon } from "../../../global.reducer";

// * =========================================================================
// * EXPORTS
// * =========================================================================

/**
 * A namespace that contains all of the data structures and React components 
 * related to the "foldable" component.
 * @version 0.1.0
 */

export namespace Foldable {

    // * =========================================================================
    // * DATA STRUCTURES
    // * =========================================================================

    export type Props = {

        label: JSX.Element | string,

        options?: {

            folded_by_default?: Boolean
            icon?: Icon.Types

        }

        className?: string,

        children?: JSX.Element | Array<JSX.Element>

    }

    export type State = {
        
        is_folded: Boolean

    }

    export type Context = {

    }

    // * =========================================================================
    // * REACT COMPONENTS
    // * =========================================================================

    export class Component extends React.Component<Props, State> {
        
        wrapper: React.RefObject<HTMLDivElement>;

        content: React.RefObject<HTMLDivElement>;

        constructor(props: Props) {

            super(props);

            this.state = {

                is_folded: this.props.options?.folded_by_default ?? true

            }

            this.wrapper = React.createRef<HTMLDivElement>();
            this.content = React.createRef<HTMLDivElement>();

            this.handleFoldedStateChange = this.handleFoldedStateChange.bind(this);
            this.renderIcon = this.renderIcon.bind(this);

        }

        componentDidMount(): void {

        }

        handleFoldedStateChange() {

            this.setState({ is_folded: this.state.is_folded ? false : true });

            const wrapper = this.wrapper.current;

            const content = this.content.current;

            if (wrapper && content) {

                const foldedAttr = "data-foldable--is-folded";

                const isFolded = wrapper.getAttribute(foldedAttr);

                if (isFolded != null) {

                    if (isFolded === "true") {

                        wrapper.setAttribute(foldedAttr, "false");

                    } else {

                        wrapper.setAttribute(foldedAttr, "true");

                    };

                }

            }

        }

        renderIcon() : JSX.Element | null {

            const iconType = this.props.options?.icon;

            if (iconType) {

                return (

                    <Icon.Component 
                        class_name="foldable-control__icon" 
                        type={iconType}
                    />

                );

            } else {

                return null;

            }
        }
        


        render(): React.ReactNode {

            const foldableClass = this.props.className 
                ? `${this.props.className} foldable`
                : `foldable`;

            return (
                
                <>

                    <div 
                        ref={ this.wrapper }
                        className={ foldableClass }
                        data-foldable--is-folded={ this.state.is_folded }
                    >
                        
                        <div className="foldable-controls">

                            <button 
                                className="foldable-control foldable-control--toggle"
                                onClick={ this.handleFoldedStateChange }
                            >

                                { this.renderIcon() }
                                
                                <span className="foldable-control__label">

                                    { this.props.label }
                                    
                                </span>
                                
                            </button>

                        </div>

                        <div 
                            className="foldable-content"
                            ref={ this.content }
                        >

                            { this.props.children }

                        </div>

                    </div>
                    
                </>

            )

        }

    }
    
}