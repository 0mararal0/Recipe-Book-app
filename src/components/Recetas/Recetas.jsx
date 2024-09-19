import React from "react";
import "./styleRecetas.css";

export const Recetas = (props) => {
  const handleDelete = () => {
    let prov;
    prov = props.data.slice(0);
    prov.splice(props.index, 1);
    props.setData(prov);
  };
  return (

    <div className='comida'>

         <Link to={`/recetas/${props.receta.id}`}> <img src={props.receta.image} alt="" />  </Link>
      

      <div>
        <h2>{props.receta.name}</h2>
        <p>{props.receta.calories > 250 ? "☹️" : "🙂"} </p>
      </div>
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};
