import { useState } from "react";
import recipes from "./assets/data.json"; //nuevo archivo de datos, podemos cambiar recipes a datos o lista de datos

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { FormularioEditarReceta } from "./components/FomularioEditarReceta/FormularioEditarReceta";

/* import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import recipes from "./assets/recipes.json"
import { Recetas } from "./components/Recetas/Recetas"; */

function App() {
  const [data, setData] = useState(recipes); // use useState acá para compartir por props y puse los atributos

  return (
    <Routes>
      <Route path={"/"} element={<Home data={data} setData={setData} />} />
      <Route path="/about" element={<About />} />
      <Route
        path={"/itemDetails/:recipe"}
        element={<ItemDetails data={data} setData={setData} />}
      />
      <Route
        path={"/formularioEditarReceta/:identificadorReceta"}
        element={<FormularioEditarReceta data={data} setData={setData} />}
      />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;
