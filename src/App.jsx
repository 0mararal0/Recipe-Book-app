import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import {FormularioEditarReceta} from "./components/FomularioEditarReceta/FormularioEditarReceta"

/* import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import recipes from "./assets/recipes.json"
import { Recetas } from "./components/Recetas/Recetas"; */

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path={"/itemDetails/:recipe"} element={<ItemDetails />} /> 
      <Route path={"/formularioEditarReceta/:identificadorReceta"} element={<FormularioEditarReceta/>} />
      <Route path={"*"} element={<NotFound />} />
     
    </Routes>
  );
}

export default App;
