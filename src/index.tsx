import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Teams from "./pages/Teams";
import Resources from "./pages/Resources";
import Discord from "./pages/Discord";
import Directory from "./pages/Directory";
import Forums from "./pages/Forums";
import Benefits from "./pages/Benefits";
import "./assets/css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/discord",
    element: <Discord />,
  },
  {
    path: "/directory",
    element: <Directory />,
  },
  {
    path: "/forums",
    element: <Forums />,
  },
  {
    path: "/Benefits",
    element: <Benefits />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
