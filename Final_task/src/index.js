import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./nav";

import "./styles.css";
import ValidatedLoginForm from "./ValidatedLoginForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Yantraksh Logistics</h1>
      <ValidatedLoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
