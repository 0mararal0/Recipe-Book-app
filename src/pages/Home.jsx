import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";

import recipes from "../assets/data.json"; //nuevo archivo de datos, podemos cambiar recipes a datos o lista de datos

import { Recetas } from "../components/Recetas/Recetas";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "../components/Footer/Footer";
import "./styleHome.css";
import { Link } from "react-router-dom";
import iconComida from "../assets/images/iconComida.png";


export const Home = ({ data, setData }) => {
  // const [data, setData] = useState(recipes);
  // const [showData, setShowData] = useState([]);

  const [countCard, setCountCard] = useState(8);

  const handleAdd = () => {
    setCountCard(countCard + 8);
  };

  const handleEntrante = () => {
    setData(
      data.filter((elem) => {
        return elem.tipo_de_plato === "Entrante";
      })
    );
  };
  const handlePrincipal = () => {
    setData(
      data.filter((elem) => {
        return elem.tipo_de_plato === "Primer plato";
      })
    );
  };
  const handlePostre = () => {
    setData(
      data.filter((elem) => {
        return elem.tipo_de_plato === "Postre";
      })
    );
  };
  const handleAll = () => {
    setData(recipes);
  };

  //export const Home = (props) => {

  return (
    <div className="containerHome">
      <Navbar />
      <div className="containerTitle">
        <h3>Display...</h3>
        <h5>¿Qué vas a comer hoy?</h5>
      </div>
      <div className="buttonSelect">
        <button className="buttonEntrante" onClick={handleEntrante}>
          <p>Entrante</p>
          <img src={iconComida} alt="icono comida" />
        </button>
        <button className="buttonPrincipal" onClick={handlePrincipal}>
          <p>Principal</p>
          <img src={iconComida} alt="icono comida" />
        </button>
        <button className="buttonPostre" onClick={handlePostre}>
          <p>Postre</p>
          <img src={iconComida} alt="icono comida" />
        </button>
        <button className="buttonTodos" onClick={handleAll}>
          <p>Todos</p>
          <img src={iconComida} alt="icono comida" />
        </button>
      </div>
      <div className="side-recetas">
        {/* <Sidebar /> */}
        <div className="recetasGaleria">

          {data.slice(0, countCard).map((receta, index) => {
            // {props.data.map((receta, index) => {


            return (
              <div key={index}>
                <Link to={`/itemDetails/${receta.id}`}>
                  <Recetas
                    receta={receta}
                    //setData={props.setData}
                    index={index}

                    data={data} //nuevo archivo de datos


                    // data={props.data}//nuevo archivo de datos
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttonMostrarMas">
        <button onClick={handleAdd}>
          <p>Mostrar mas</p>
        </button>
      </div>

      <Footer />
    </div>
  );
};
