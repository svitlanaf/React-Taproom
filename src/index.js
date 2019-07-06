import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import KegList from "./components/keg_list";

ReactDOM.render(<KegList />, document.getElementById("root"));
serviceWorker.unregister();
