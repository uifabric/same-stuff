import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App/App";
import * as Fabric from "office-ui-fabric-react";

import { ThemeProvider } from "./ThemeProvider";
import { LightTheme } from "./themes/LightTheme";

// Initialize default icon set. While this is a separate thing now, we should
// move this into unified theme object.
Fabric.initializeIcons();

ReactDOM.render(
  <ThemeProvider theme={LightTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
