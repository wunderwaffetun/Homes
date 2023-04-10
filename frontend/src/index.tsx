import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";
import { App } from "./App";
import Card from "./pages/Card/Card";
import Solves from "./pages/Solves/Solves";

// const root = ReactDOM.createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//ReactDOM.render(<App />, document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Solves id={1} /> */}
    <App />
  </React.StrictMode>
);

