import React from "react";
import "./styleRecetas.css";
import { Link } from "react-router-dom";

export const Recetas = (props) => { {/* lleve el estado a app */}
  const handleDelete = () => {
    let prov;
    prov = props.data.slice(0);
    prov.splice(props.index, 1);
    props.setData(prov);
  };
  return (
    <div className="comida">
      {/*  <Link to={`/recetas/${props.receta.id}`}>
        {" "}
        <img src={props.receta.image} alt="" />{" "}
      </Link> */}
      <img src={props.receta.imagen} alt="" /> {/* cambie image por imagen */}

      <div>
        <h2>{props.receta.titulo}</h2>   {/* cambie title por titulo*/}
        <p>{props.receta.calories > 250 ? "☹️" : "🙂"} </p>
      </div>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};
