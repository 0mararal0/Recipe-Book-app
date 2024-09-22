import React from "react";
import recipes from "../assets/data.json";
import { useParams } from "react-router-dom";
import "./ItemDetails.css";

export const ItemDetails = () => {
  const parametrosDinamicos = useParams();

  const recetaSeleccionada = recipes.find((eachReceta) => {
    const identificadorReceta = parseInt(parametrosDinamicos.recipe)//para cambiar recipe que es cadena a número que es nuestro id
    return eachReceta.id === identificadorReceta;
  });

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
              <span><b>Tiempo de preparación:</b>  {recetaSeleccionada.tiempo_de_preparacion}</span>
              <span><b>Porciones:</b> {recetaSeleccionada.porciones}</span>
              <span><b>Dificultad:</b> {recetaSeleccionada.dificultad}</span>
            </div>
            <p>
           {recetaSeleccionada.elaboracion}
            </p>

            <h3>Ingredientes</h3>
            <ul> 
            {recetaSeleccionada.ingredientes.map((cadaIngrediente, index) => {
            return (
              <li key={index}>
                {cadaIngrediente}
                
              </li>
            );
          })}
            </ul>
          </div>

          <div>
            <img
              className="recetasImagenes"
              src={recetaSeleccionada.imagen}
              alt="food"
            />
          </div>
        </div>
      )}
    </div>
  );
};
