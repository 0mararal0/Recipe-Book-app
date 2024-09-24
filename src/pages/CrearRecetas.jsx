import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./crearStyle.css";
import { Link } from "react-router-dom";

function CrearReceta({ data, setData }) {
  const [titulo, setTitulo] = useState("");
  const [tipoDePlato, setTipoDePlato] = useState("");
  const [tiempoDePreparacion, setTiempoDePreparacion] = useState("");
  const [porciones, setPorciones] = useState(1);
  const [dificultad, setDificultad] = useState("");
  const [elaboracion, setElaboracion] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [imagen, setImagen] = useState("");

  const navigate = useNavigate(); //con esto volvemos a home

  const handleTituloChange = (event) => setTitulo(event.target.value);
  const handleTipoDePlatoChange = (event) => setTipoDePlato(event.target.value);
  const handleTiempoDePreparacionChange = (event) =>
    setTiempoDePreparacion(event.target.value);
  const handlePorcionesChange = (event) => setPorciones(event.target.value);
  const handleDificultadChange = (event) => setDificultad(event.target.value);
  const handleElaboracionChange = (event) => setElaboracion(event.target.value);
  const handleIngredientesChange = (event) =>
    setIngredientes(event.target.value.split(","));
  const handleImagenChange = (event) => setImagen(event.target.value);

  const handleAddReceta = (event) => {
    event.preventDefault();

    const nuevaReceta = {
      id: data.length + 1, // el id tiene que ser númerico, porque entiendo que favorito necesita numeros
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

    navigate("/"); //aquí es donde uso la función para volver a home
  };

  return (
    <div className="crear-receta-form">

      <form onSubmit={handleAddReceta} className="formulario">
      <h1>Crear Nueva Receta 🍽️ </h1>
        <div>
          <label className="titulo"></label>
          <div>Título</div>
          <input
            onChange={handleTituloChange}
            value={titulo}
            type="text"
            name="titulo"
            required
          />
        </div>

        <div className="contenedor-label-fila">
          <label>
            <div>Plato</div>
          <select
            onChange={handleTipoDePlatoChange}
            value={tipoDePlato}
            type="text"
            name="tipoDePlato"
            required
          >
            <option value="">---</option>
            <option value="Entrante">Entrante</option>
            <option value="Principal">Principal</option>
            <option value="Postre">Postre</option>
          </select>
          </label>

          <label className="porciones">
            <div>Porciones</div> 
          <input
            onChange={handlePorcionesChange}
            value={porciones}
            type="number"
            name="porciones"
            min={1}
            required
          />
          </label>
          </div>

          <div className="contenedor-label-fila">

          <label className="dificultad">
            <div>Dificultad</div> 
          <select
            onChange={handleDificultadChange}
            value={dificultad}
            type="text"
            name="dificultad"
            required
          >
            <option value="">---</option>
            <option value="Facil">Fácil</option>
            <option value="Medio">Medio</option>
            <option value="Dificil">Dificil</option>
          </select>
          </label>

          <label className="tiempoDePreparacion">
            <div>Tiempo de Preparación</div>
          <input
            onChange={handleTiempoDePreparacionChange}
            value={tiempoDePreparacion}
            type="text"
            name="tiempoDePreparacion"
            required
          />
          </label>

          </div>


        <div>
          <label className="elaboracion">
            <div>Elaboración</div> 
          <textarea
            onChange={handleElaboracionChange}
            value={elaboracion}
            name="elaboracion"
            required
          ></textarea>
          </label>

        
          <label className="ingredientes">
            <div>Ingredientes</div>
          <input
            onChange={handleIngredientesChange}
            value={ingredientes.join(",")}
            type="text"
            name="ingredientes"
            required
            />
            </label>

          <label className="imagen">
            <div>Imagen</div> 
          <input
            onChange={handleImagenChange}
            value={imagen}
            type="text"
            name="imagen"
            required
            />
            </label>
            </div>

            <div className="contenedor-botones">
              <div className="contenedor-boton">
                <Link to={"/"}>
                  <button className="boton-secundario">Cancelar</button>
                </Link>
              </div>
              <div className="contenedor-boton">
              <button type="submit">Agregar</button>
              </div>
            </div>

      </form>
    </div>
  );
}

export default CrearReceta;
