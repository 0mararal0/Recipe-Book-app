import React from "react";
import { Recetas } from "../components/Recetas/Recetas";

export const FavoriteRecipes = ({ data }) => {
  return (
    <>
      <div className="containerFavorito">
        <div className="containerTitleFavorito">
          <h3>Recetas Favoritas</h3>
        </div>
        <div className="recetasGaleria">
          {data
            .filter((e) => e.favorito === 1)
            .map((receta, index) => {
              return (
                <div key={index}>
                  <Recetas receta={receta} data={data} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
