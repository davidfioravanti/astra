// * =========================================================================
// * IMPORTS
// * =========================================================================

import ReactDOM from "react-dom/client";

import { Configuraton } from "./configuration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./modules/global/assets/scss/global.index.scss";

// * =========================================================================
// * INITIALIZATION
// * =========================================================================

const container = document.getElementById("root")!;

const router = createBrowserRouter(Configuraton.routing);

const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router}/>);