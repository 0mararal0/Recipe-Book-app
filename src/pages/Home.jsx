import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Recetas } from "../components/Recetas/Recetas";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "../components/Footer/Footer";
import "./styleHome.css";
import { Link } from "react-router-dom";

export const Home = (props) => {
  
  return (
    <div className="containerHome">
      <Navbar />
      <div className="side-recetas">
        <Sidebar />
        <div className="recetasGaleria">
          {props.data.map((receta, index) => {
            return (
              <div key={index}>
                <Link to={`/itemDetails/${receta.id}`}>
                  <Recetas
                    receta={receta}
                    setData={props.setData}
                    index={index}
                    data={props.data}//nuevo archivo de datos
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
