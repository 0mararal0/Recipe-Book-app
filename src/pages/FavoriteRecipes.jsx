import React from "react";
import { Recetas } from "../components/Recetas/Recetas";

export const FavoriteRecipes = ({ data }) => {
  console.log(data);

  return (
    <>
      <div>
        {data
          .filter((e) => e.favorito === 1)
          .map((receta) => {
            return (
              <div key={receta.id}>
                <Recetas receta={receta} data={data} />
              </div>
            );
          })}
      </div>
    </>
  );
};
