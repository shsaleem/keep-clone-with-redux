import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { KeepProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <KeepProvider>
      <App />
    </KeepProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
