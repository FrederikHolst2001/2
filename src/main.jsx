// ---- Base44 compatibility stub (DO NOT REMOVE) ----
window.base44 = {
  get: async () => ({}),
  invoke: async () => ({}),
  me: async () => null,
};
// -----------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
