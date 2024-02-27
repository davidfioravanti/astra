// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { FunctionComponent, useState } from "react";

// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

import { Avatar } from "../atoms/theme.avatar.atom";
import { Badge } from "../atoms/theme.badge.atom";
import { Icon } from "../atoms/theme.icon.atom";

// * ===========================================================================
// * Kitchen Sink Namespace
// * ===========================================================================

export namespace KitchenSink {

    // * ===========================================================================
    // * Kitchen Sink Page Properties
    // * ===========================================================================

    export type Properties =  JSX.IntrinsicElements["article"] & {
        props?: {
    
        }
    }

    // * ===========================================================================
    // * Kitchen Sink Page Component
    // * ===========================================================================

    export const Page : FunctionComponent<Properties> = ({ props, ...rest} : Properties) : JSX.Element  => {
        return (
            <article
                className="page page--kitchen-sink"
            >
                <div>
                    <Avatar.Atom 
                        props={{ 
                            image_src: "https://mui.com/static/images/avatar/2.jpg", 
                            user_name: ["foo", "bar"],
                            options: {
                                size: Avatar.Size.Medium
                            },
                            variant: Avatar.Variant.Image
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        columnGap: "16px"
                    }}
                >
                    <button>
                        <Icon.Atom props={{ type: Icon.Type.CircleNotifications }}>                    
                            <Badge.Atom
                                props={{
                                    variant: Badge.Variant.Empty
                                }}
                            />
                        </Icon.Atom>
                    </button>
                    <button>
                        <Icon.Atom props={{ type: Icon.Type.CreditCard }}>                    
                            <Badge.Atom
                                props={{
                                    variant: Badge.Variant.Empty
                                }}
                            />
                        </Icon.Atom>
                    </button>
                    <button>
                        <Icon.Atom props={{ type: Icon.Type.AccountBox }}>                    
                            <Badge.Atom
                                props={{
                                    content: 100,
                                    options: {
                                        enable_auto_adjust_margin_right: false,
                                        enable_hide_zero_value: true,
                                        enable_maximum_value_plus: true,
                                        maximum_value: 1000,
                                    },
                                    variant: Badge.Variant.Empty
                                }}
                            />
                        </Icon.Atom>

                    </button>
                </div>
            </article>
        )
    }

}