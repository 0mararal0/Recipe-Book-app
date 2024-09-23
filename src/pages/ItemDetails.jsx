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
    <div className="item-details">
      <div className="fondo-receta"></div>
      {recetaSeleccionada === undefined ? (
        <h2>No existe la receta</h2>
      ) : (
        <div>
          <div className="contenedor contenedor-principal">
            <div>
            <h1>{recetaSeleccionada.titulo} </h1>
              <div className="contenedor-info-fila">
                <div className="info-fila-titulo">
                  <span>🥘</span> {recetaSeleccionada.tipo_de_plato}
                </div>
                <div className="info-fila-titulo">
                  <span>🍽️</span> {recetaSeleccionada.porciones} porciones
                </div>
                <div className="info-fila-titulo">
                <span>⌛</span> {recetaSeleccionada.tiempo_de_preparacion}
                </div>
                <div className="info-fila-titulo">
                  <span>⚙️</span> {recetaSeleccionada.dificultad}
                </div>
              </div>

              <h3>Ingredientes</h3>
              <ul>
                {recetaSeleccionada.ingredientes.map(
                  (cadaIngrediente, index) => {
                    return <li key={index}>{cadaIngrediente}</li>;
                  }
                )}
              </ul>              
              
              <h3>Elaboración</h3>
              <p className="elaboracion">{recetaSeleccionada.elaboracion}</p>
            </div>

            <div>
              <img
                className="recetasImagenes"
                src={recetaSeleccionada.imagen}
                alt="food"
              />

              <div className="contenedor-botones">
                <div className="contenedor-boton">
                  <button
                    className="boton-borrar boton-secundario boton-mas-ancho"
                    onClick={handleEliminarReceta}
                  >
                    Borrar Receta
                  </button>
                </div>

                <div className="contenedor-boton">
                  <Link to={`/formularioEditarReceta/${recetaSeleccionada.id}`}>
                    <button className="boton-editar boton-mas-ancho">
                      Editar Receta
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
