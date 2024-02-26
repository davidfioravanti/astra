// * ===========================================================================
// * Package Dependency Imports
// * ===========================================================================

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// * ===========================================================================
// * TypeScript & Asset Imports
// * ===========================================================================

import { Configuration } from "./configuration";
import "./index.scss";

// * ===========================================================================
// * Application Initialization
// * ===========================================================================

// ===========================================================================
//     Create a reference to the "root" container element that React will use
// to render the application. Configure the BrowserRouter using the routing
// specified in `configuration.tsx` and create the React root.
// ===========================================================================
const container = document.getElementById("root")!;
const router = createBrowserRouter(Configuration.routing);
const root = createRoot(container);
// ===========================================================================
// Render the React application using the React root.
// ===========================================================================
root.render(<RouterProvider router={ router }/>);