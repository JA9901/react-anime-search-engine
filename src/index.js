import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";

library.add(faSpinner, faPlay, faMagnifyingGlass);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();