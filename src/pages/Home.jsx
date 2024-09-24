import React, { useState } from "react";
import { Recetas } from "../components/Recetas/Recetas";
import "./styleHome.css";
import iconComida from "../assets/images/iconComida.png";

export const Home = ({ data, setData }) => {
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
  const actualizarData = () => {
    setShowData(data);
  };

  return (
    <div className="containerHome">
      <div className="containerTitle">
        <h3>¿Qué vas a comer hoy?</h3>
        <h5>Tus recetas favoritas siempre a mano</h5>
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
                <Recetas
                  receta={receta}
                  index={index}
                  data={data}
                  setData={setData}
                  actualizarData={actualizarData}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttonMostrarMas">
        <button onClick={handleAdd}>
          <p>Mostrar más</p>
        </button>
      </div>
    </div>
  );
};
