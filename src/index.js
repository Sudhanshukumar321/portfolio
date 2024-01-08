import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BlogContextProvider } from "./context/BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BlogContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BlogContextProvider>
);
