import React from "react";
import recipes from "../assets/recipes.json";
import { useParams } from "react-router-dom";
import "./ItemDetails.css";

export const ItemDetails = () => {
  const parametrosDinamicos = useParams();

  const recetaSeleccionada = recipes.find((eachReceta) => {
    return eachReceta.id === parametrosDinamicos.recipe;
  });

  return (
    <div>
      <div className="fondo-receta"></div>
      {recetaSeleccionada === undefined ? (
        <h2>No existe la receta</h2>
      ) : (
        <div className="contenedor">
          <div>
            <h1>{recetaSeleccionada.name} </h1>
            <div className="contenedor-span">
              <span><b>Calorías:</b>  {recetaSeleccionada.calories}</span>
              <span><b>Porciones:</b> {recetaSeleccionada.servings}</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3>Ingredientes</h3>
            <ul>
              <li>Lorem ipsum </li>
              <li>Lorem ipsum </li>
              <li>Lorem ipsum </li>
              <li>Lorem ipsum </li>
              <li>Lorem ipsum </li>
            </ul>
          </div>

          <div>
            <img
              className="recetasImagenes"
              src={recetaSeleccionada.image}
              alt="food"
            />
          </div>
        </div>
      )}
    </div>
  );
};
