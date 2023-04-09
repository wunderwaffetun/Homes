import React from "react";
import ReactDOM from "react-dom/client";
//import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Card from "./pages/Card/Card.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

reportWebVitals();
