import React from "react";
import ReactDOM from "react-dom";
import loginService from "./services/logService";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

loginService.init();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
