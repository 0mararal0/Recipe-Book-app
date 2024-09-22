import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearReceta({ setData }) {
  const [titulo, setTitulo] = useState("");
  const [tipoDePlato, setTipoDePlato] = useState("");
  const [tiempoDePreparacion, setTiempoDePreparacion] = useState("");
  const [porciones, setPorciones] = useState(0);
  const [dificultad, setDificultad] = useState("");
  const [elaboracion, setElaboracion] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [imagen, setImagen] = useState("");

  const navigate = useNavigate(); //con esto volvemos a home

  const handleTituloChange = (event) => setTitulo(event.target.value);
  const handleTipoDePlatoChange = (event) => setTipoDePlato(event.target.value);
  const handleTiempoDePreparacionChange = (event) => setTiempoDePreparacion(event.target.value);
  const handlePorcionesChange = (event) => setPorciones(event.target.value);
  const handleDificultadChange = (event) => setDificultad(event.target.value);
  const handleElaboracionChange = (event) => setElaboracion(event.target.value);
  const handleIngredientesChange = (event) => setIngredientes(event.target.value.split(","));
  const handleImagenChange = (event) => setImagen(event.target.value);

  const handleAddReceta = (event) => {
    event.preventDefault();

    const nuevaReceta = {
      id: Date.now(), // id único basado en el tiempo en milisegundos
      titulo,
      tipo_de_plato: tipoDePlato,
      tiempo_de_preparacion: tiempoDePreparacion,
      porciones,
      dificultad,
      elaboracion,
      ingredientes,
      imagen,
    };

    setData((recetasActuales) => [nuevaReceta, ...recetasActuales]);


    setTitulo("");
    setTipoDePlato("");
    setTiempoDePreparacion("");
    setPorciones(0);
    setDificultad("");
    setElaboracion("");
    setIngredientes([]);
    setImagen("");

    navigate("/") //aquí es donde uso la función para volver a home
  };

  return (
    <div className="crear-receta-form">
      <h2>Crear Nueva Receta</h2>

      <form onSubmit={handleAddReceta}>
        <div>
          <label className="titulo">Título: </label>
          <input
            onChange={handleTituloChange}
            value={titulo}
            type="text"
            name="titulo"
            required
          />
        </div>

        <div>
          <label className="tipoDePlato">Tipo de Plato: </label>
          <input
            onChange={handleTipoDePlatoChange}
            value={tipoDePlato}
            type="text"
            name="tipoDePlato"
            required
          />
        </div>

        <div>
          <label className="tiempoDePreparacion">Tiempo de Preparación: </label>
          <input
            onChange={handleTiempoDePreparacionChange}
            value={tiempoDePreparacion}
            type="text"
            name="tiempoDePreparacion"
            required
          />
        </div>

        <div>
          <label className="porciones">Porciones: </label>
          <input
            onChange={handlePorcionesChange}
            value={porciones}
            type="number"
            name="porciones"
            required
          />
        </div>

        <div>
          <label className="dificultad">Dificultad: </label>
          <input
            onChange={handleDificultadChange}
            value={dificultad}
            type="text"
            name="dificultad"
            required
          />
        </div>

        <div>
          <label className="elaboracion">Elaboración: </label>
          <textarea
            onChange={handleElaboracionChange}
            value={elaboracion}
            name="elaboracion"
            required
          ></textarea>
        </div>

        <div>
          <label className="ingredientes">Ingredientes (separados por comas): </label>
          <input
            onChange={handleIngredientesChange}
            value={ingredientes.join(",")}
            type="text"
            name="ingredientes"
            required
          />
        </div>

        <div>
          <label className="imagen">URL de la Imagen: </label>
          <input
            onChange={handleImagenChange}
            value={imagen}
            type="text"
            name="imagen"
            required
          />
        </div>

        <button type="submit">Agregar Receta</button>
      </form>
    </div>
  );
}

export default CrearReceta;
