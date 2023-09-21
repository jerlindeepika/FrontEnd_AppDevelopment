// Import necessary modules
import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./AppRoutes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
  rootElement
);
