import { useState } from "react";
import recipes from "./assets/data.json";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { FavoriteRecipes } from "./pages/FavoriteRecipes";
import { FormularioEditarReceta } from "./components/FomularioEditarReceta/FormularioEditarReceta";
import CrearReceta from "./pages/CrearRecetas";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState(recipes);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home data={data} setData={setData} />} />
        <Route path="/about" element={<About />} />
        <Route path={"/favoritesRecipes"} element={<FavoriteRecipes />} />
        <Route
          path="/createRecipe"
          element={<CrearReceta setData={setData} />}
        />
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
      <Footer />
    </>
  );
}
export default App;
