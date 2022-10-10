import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { RotationContextProvider } from "./context/Rotation";

console.log("hi");

ReactDOM.render(
  <RotationContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RotationContextProvider>,
  document.getElementById("root")
);
