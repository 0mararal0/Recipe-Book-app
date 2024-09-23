import React, { useState } from "react";
import { Recetas } from "../components/Recetas/Recetas";
import "./styleHome.css";
import { Link } from "react-router-dom";
import iconComida from "../assets/images/iconComida.png";

export const Home = ({ data }) => {
  const [showData, setShowData] = useState(data);
  const [countCard, setCountCard] = useState(8);

  const handleAdd = () => {
    setCountCard(countCard + 8);
  };

  const handleEntrante = () => {
    setShowData(
      data.filter((elem) => {
        return elem.tipo_de_plato === "Entrante";
      })
    );
    setCountCard(8);
  };
  const handlePrincipal = () => {
    setShowData(
      data.filter((elem) => {
        return elem.tipo_de_plato === "Primer plato";
      })
    );
    setCountCard(8);
  };
  const handlePostre = () => {
    setShowData(
      data.filter((elem) => {
        return elem.tipo_de_plato === "Postre";
      })
    );
    setCountCard(8);
  };
  const handleAll = () => {
    setShowData(data);
    setCountCard(8);
  };

  return (
    <div className="containerHome">
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
        <div className="recetasGaleria">
          {showData.slice(0, countCard).map((receta, index) => {
            return (
              <div key={index}>
                <Link
                  to={`/itemDetails/${receta.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Recetas receta={receta} index={index} data={data} />
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
    </div>
  );
};
