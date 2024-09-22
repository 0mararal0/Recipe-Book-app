import React from "react";
import "./FormularioEditarReceta.css";
import recipes from "../../assets/data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function FormularioEditarReceta() {
  const parametrosDinamicos = useParams();

  const recetaSeleccionada = recipes.find((eachReceta) => {
    const identificadorReceta = parseInt(
      parametrosDinamicos.identificadorReceta
    ); //para cambiar recipe que es cadena a número que es nuestro id
    return eachReceta.id === identificadorReceta;
  });
  const [titulo, setTitulo] = useState(recetaSeleccionada.titulo);
  const [descripcion, setDescripcion] = useState(
    recetaSeleccionada.elaboracion
  );
  const [ingredientes, setIngredientes] = useState(
    recetaSeleccionada.ingredientes
  );
  const [porciones, setPoriciones] = useState(recetaSeleccionada.porciones);
  const [dificultad, setDificultad] = useState(recetaSeleccionada.dificultad);
  const [tipo, setTipo] = useState(recetaSeleccionada.tipo_de_plato);
  const [tiempo, setTiempo] = useState(
    recetaSeleccionada.tiempo_de_preparacion
  );
  const [imagen, setImagen] = useState(recetaSeleccionada.imagen);
  const handelTituloCambiar = (evento) => {
    let value = evento.target.value;
    setTitulo(value);
  };
  const handelDescripcionCambiar = (evento) => {
    let value = evento.target.value;
    setDescripcion(value);
  };

  const handelIngredientesCambiar = (evento) => {
    let value = evento.target.value;
    setIngredientes(value);
  };
  const handelPorcionesCambiar = (evento) => {
    let value = evento.target.value;
    setPoriciones(value);
  };

  const handelDificultadCambiar = (evento) => {
    let value = evento.target.value;
    setDificultad(value);
  };
  const handelTipo = (evento) => {
    let value = evento.target.value;
    setTipo(value);
  };
  const handelTiempo = (evento) => {
    let value = evento.target.value;
    setTiempo(value);
  };
  const handelImagen = (evento) => {
    let value = evento.target.value;
    setImagen(value);
  };

  const handleEditar = (event) => {
    let recetaEditada = {
      titulo: titulo,
      descripcion: descripcion,
      ingredientes: ingredientes,
      porciones: porciones,
      dificultad: dificultad,
      tipo: tipo,
      tiempo: tiempo,
      imagen: imagen,
    };

    //props.agregarNuevoEstudiante(nuevoEstudiante);

    event.preventDefault();
  };


  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleEditar}> 
        <span>Editar receta</span>
        <div>
          <label>
            <div>Titulo</div>
            <input
              value={titulo}
              onChange={handelTituloCambiar}
              name="titulo"
              type="text"
              placeholder=""
            />
          </label>

          <label>
            <div> Descripción</div>
            <textarea
              value={descripcion}
              onChange={handelDescripcionCambiar}
              name="descripción"
              placeholder=""
            />
          </label>

          <label>
            <div>Ingredientes </div>
            <textarea
              value={ingredientes}
              onChange={handelIngredientesCambiar}
              name="ingredientes"
              placeholder=""
            />
          </label>

          <label>
            <div> Porciones </div>
            <input
              value={porciones}
              onChange={handelPorcionesCambiar}
              name="porciones"
              type="text"
              placeholder=""
            />
          </label>
        </div>

        <div>
          <label>
            Dificultad
            <select
              name="nivel de dificultad"
              value={dificultad}
              onChange={handelDificultadCambiar}
            >
              <option value="Facil">Fácil</option>
              <option value="Medio">Medio</option>
              <option value="Dificil">Dificil</option>
            </select>
          </label>

          <label>
            Tipo de Plato
            <select
              name="nivel de dificultad"
              value={tipo}
              onChange={handelTipo}
            >
              <option value="Entrante">Entrante</option>
              <option value="Principal">Principal</option>
              <option value="Postre">Postre</option>
            </select>
          </label>

          <label>
            <div> Tiempo de preparación </div>
            <input
              value={tiempo}
              onChange={handelTiempo}
              name="tiempo de preparación"
              type="text"
              placeholder=""
            />
          </label>

          <label>
            <div> Imagen </div>

            <input
              value={imagen}
              onChange={handelImagen}
              name="imagen"
              type="url"
              placeholder="Imagen del"
            />
          </label>

          <button type="submit">Editar Receta</button>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
}
