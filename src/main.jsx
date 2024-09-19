import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About.jsx";
import { ItemDetails } from "./pages/ItemDetails.jsx";
import { Home } from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <About /> */}
      {/* <ItemDetails /> */}
      <Home />
    </BrowserRouter>
  </StrictMode>
);
