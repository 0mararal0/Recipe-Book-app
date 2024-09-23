import React from "react";
import "./FormularioEditarReceta.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormularioEditarReceta(props) {
  let navegar = useNavigate();

  const parametrosDinamicos = useParams();

  const recetaSeleccionada = props.data.find((eachReceta) => {
    const identificadorReceta = parseInt(
      parametrosDinamicos.identificadorReceta
    ); 
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
    event.preventDefault();

    let recetaEditada = {
      id: recetaSeleccionada.id,
      titulo: titulo,
      elaboracion: descripcion,
      ingredientes: ingredientes,
      porciones: porciones,
      dificultad: dificultad,
      tipo_de_plato: tipo,
      tiempo_de_preparacion: tiempo,
      imagen: imagen,
    };

    
    let recetasFiltradas = props.data.filter((cadaReceta) => {
      return cadaReceta.id !== recetaSeleccionada.id;
    });

    
    recetasFiltradas.push(recetaEditada);

    
    props.setData(recetasFiltradas);

    
    navegar(`/itemDetails/${recetaSeleccionada.id}`);
  };

  return (
    <div className="contenedor-formulario">
    
      <form onSubmit={handleEditar} className="formulario">
        <h1>Editar Receta</h1>
        <div>
          <label>
            <div>Título</div>
            <input
              value={titulo}
              onChange={handelTituloCambiar}
              name="titulo"
              type="text"
              placeholder=""
            />
          </label>

          <div className="contenedor-label-fila">
            <label>
              <div>Plato</div>
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
              <div> Porciones </div>
              <input
                value={porciones}
                onChange={handelPorcionesCambiar}
                name="porciones"
                type="text"
                placeholder=""
               //porque no me sale con las 2 flechitas para mover arriba y abajo
              />
            </label>
          </div>
        </div>

        <div className="contenedor-label-fila">
          <label>
            <div>Dificultad</div>
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
            <div> Tiempo de preparación </div>
            <input
              value={tiempo}
              onChange={handelTiempo}
              name="tiempo de preparación"
              type="text"
              placeholder=""
            />
          </label>
        </div>

        <div>
          <label>
            <div>Elaboración</div>
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
            <div> Imagen </div>

            <input
              value={imagen}
              onChange={handelImagen}
              name="imagen"
              type="url"
              placeholder="Imagen del"
            />
          </label>
        </div>
        <div className="contenedor-botones">
        <div className="boton-Secundario">
        <button type="submit">Cerrar</button>
        </div>
        <div className="contenedor-boton">
          <button type="submit">Editar Receta</button>
        </div>
          
        </div>
        
      </form>
     
    </div>
  );
}
