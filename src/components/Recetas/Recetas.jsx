import React, { useState } from "react";
import "./styleRecetas.css";
import { Link } from "react-router-dom";

export const Recetas = ({ data, setData, receta, index, actualizarData }) => {
  const [iconFav, setIconFav] = useState(false);
  const handleFavorito = () => {
    if (data[receta.id - 1].favorito === 1) {
      const editFav = data.map((elem) => {
        if (elem.id === receta.id) {
          return { ...elem, favorito: 0 };
        }
        return elem;
      });
      setData(editFav);
      setIconFav(true);
      actualizarData();
    } else if (data[receta.id - 1].favorito === 0) {
      const editFav = data.map((elem) => {
        if (elem.id === receta.id) {
          return { ...elem, favorito: 1 };
        }
        return elem;
      });
      setData(editFav);
      setIconFav(false);
      actualizarData();
    }
  };

  return (
    <div className="comida">
      <button onClick={handleFavorito} className="iconFav">
        {data[receta.id - 1].favorito === 1 ? (
          <p style={{ backgroundColor: "transparent" }}>❤️ </p>
        ) : (
          <p style={{ backgroundColor: "transparent" }}> 🤍 </p>
        )}
      </button>
      <Link to={`/itemDetails/${receta.id}`} style={{ textDecoration: "none" }}>
        <img src={receta.imagen} alt="" />
        <div>
          <h2>{receta.titulo}</h2>
        </div>
        <div>
          <p>⌛{receta.tiempo_de_preparacion}</p>
          <p>⚙️{receta.dificultad}</p>
        </div>
      </Link>
    </div>
  );
};
