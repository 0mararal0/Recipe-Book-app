import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import recipes from "../assets/data.json";//nuevo archivo de datos, podemos cambiar recipes a datos o lista de datos
import { Recetas } from "../components/Recetas/Recetas";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "../components/Footer/Footer";
import "./styleHome.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState(recipes);

  return (
    <div className="containerHome">
      <Navbar />
      <div className="side-recetas">
        <Sidebar />
        <div className="recetasGaleria">
          {data.map((receta, index) => {
            return (
              <div key={index}>
                <Link to={`/itemDetails/${receta.id}`}>
                  <Recetas
                    receta={receta}
                    setData={setData}
                    index={index}
                    data={data}//nuevo archivo de datos
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};
