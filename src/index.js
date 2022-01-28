import React from "react";
import ReactDOM from "react-dom";
import { ReactApp } from "./ReactApp";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>,
  document.getElementById("react-app")
);