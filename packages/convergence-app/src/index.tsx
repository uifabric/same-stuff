import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as Fabric from "office-ui-fabric-react";

// Initialize default icon set. While this is a separate thing now, we should
// move this into unified theme object.
Fabric.initializeIcons();

ReactDOM.render(<App />, document.getElementById("root"));
