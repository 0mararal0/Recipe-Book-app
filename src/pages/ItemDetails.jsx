import React from "react";
import recipes from "../assets/recipes.json";
import { useParams } from "react-router-dom";

export const ItemDetails = () => {
  const parametrosDinamicos = useParams();
  // const parametrosDinamicos = {recipe: "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",};
  console.log(parametrosDinamicos);

  const recetaSeleccionada = recipes.find((eachReceta) => {
    return eachReceta.id === parametrosDinamicos.recipe;
  });

  return (
    <div>
      <h3>Detalles de la Receta</h3>

      {recetaSeleccionada === undefined ? (
        <h2>No existe la receta</h2>
      ) : (
        <div className="contendor">
          <img
            className="rectasImagenes"
            src={recetaSeleccionada.image}
            alt="food"
          />
          <h3>¿Cómo tener una {recetaSeleccionada.name} perfecta?</h3>
          <h3>{recetaSeleccionada.calories}</h3>
          <h3>{recetaSeleccionada.servings}</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h3>Ingredinetes</h3>
          <ul>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
          </ul>
        </div>
      )}
    </div>
  );
};
