/**
 *
 * Main App JS File
 *
 * @author: John Dave D. Lagdameo
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
