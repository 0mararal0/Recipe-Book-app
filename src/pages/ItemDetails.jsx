import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ItemDetails.css";
import { Link } from "react-router-dom";

export const ItemDetails = (props) => {
  let navegar = useNavigate();
  const parametrosDinamicos = useParams();
  const identificadorReceta = parseInt(parametrosDinamicos.recipe); 

  const recetaSeleccionada = props.data.find((eachReceta) => {
    return eachReceta.id === identificadorReceta;
  });

  const handleEliminarReceta = (event) => {
   
    let recetasFiltradas = props.data.filter((cadaReceta) => {
      return cadaReceta.id !== identificadorReceta;
    });

   
    props.setData(recetasFiltradas);

   
    navegar("/");
  };

  return (
    <div>
      <div className="fondo-receta"></div>
      {recetaSeleccionada === undefined ? (
        <h2>No existe la receta</h2>
      ) : (
        <div className="contenedor">
          <div>
            <h1>{recetaSeleccionada.titulo} </h1>
            <h3>tipo de plato: {recetaSeleccionada.tipo_de_plato}</h3>
            <div className="contenedor-span">
              <span>
                <b>⌛</b>{" "}
                {recetaSeleccionada.tiempo_de_preparacion}
              </span>
              <span>
                <b>Porciones:</b> {recetaSeleccionada.porciones}
              </span>
              <span>
                <b>⚙️</b> {recetaSeleccionada.dificultad}
              </span>
            </div>
            <p>{recetaSeleccionada.elaboracion}</p>

            <h3>Ingredientes</h3>
            <ul>
              {recetaSeleccionada.ingredientes.map((cadaIngrediente, index) => {
                return <li key={index}>{cadaIngrediente}</li>;
              })}
            </ul>
          </div>

          <div>
            <img
              className="recetasImagenes"
              src={recetaSeleccionada.imagen}
              alt="food"
            />

            <div className="contenedor-botones">
              <div className="contenedor-boton">
                <Link to={`/formularioEditarReceta/${recetaSeleccionada.id}`}>
                  <button className="boton-editar">Editar</button>
                </Link>
              </div>

              <div className="contenedor-boton">
                <button className="boton-borrar" onClick={handleEliminarReceta}>
                  Borrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
