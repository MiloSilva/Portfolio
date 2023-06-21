import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { Landing } from "@pages";
import GlobalStyle from "./globalStyles";

const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [],
  },
]);

if (root === null) {
  console.error("No root found in index.html, please contact an admin");
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
