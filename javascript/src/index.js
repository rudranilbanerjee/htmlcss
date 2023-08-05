import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
ReactDOM.render(
<>
  <span>Id Number </span> 
  <input type="number" id="input"></input>
  {App()}
</>, document.getElementById("root"));