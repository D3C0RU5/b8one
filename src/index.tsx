import React from "react";
import ReactDOM from "react-dom";
import MainTemplate from "./components/templates/main";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainTemplate />
  </React.StrictMode>,
  document.getElementById("root")
);
