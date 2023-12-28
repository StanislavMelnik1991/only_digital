import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "@shared/styles/index.scss";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.log("root not found");
}
