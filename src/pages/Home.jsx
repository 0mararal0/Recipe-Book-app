import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

import recipes from "../assets/data.json"; //nuevo archivo de datos, podemos cambiar recipes a datos o lista de datos

import { Recetas } from "../components/Recetas/Recetas";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Footer } from "../components/Footer/Footer";
import "./styleHome.css";
import { Link } from "react-router-dom";
import iconComida from "../assets/images/iconComida.png";

let dataInitial = recipes.slice(0).splice(0, 7);


export const Home = () => {
  const [data, setData] = useState(recipes);
  const [showData, setShowData] = useState([]);
  const [countCard, setCountCard] = useState(8);

  const handleAdd = () => {
    setCountCard(countCard + 8);
  };


//export const Home = (props) => {
  

  return (
    <div className="containerHome">
      <Navbar />
      <div className="containerTitle">
        <h3>Display...</h3>
        <h5>¿Qué vas a comer hoy?</h5>
      </div>
      <div className="buttonSelect">
        <button className="buttonEntrante">
          <p>Entrante</p>
          <img src={iconComida} alt="icono comida" />
        </button>
        <button className="buttonPrincipal">
          <p>Principal</p>
          <img src={iconComida} alt="icono comida" />
        </button>
        <button className="buttonPostre">
          <p>Postre</p>
          <img src={iconComida} alt="icono comida" />
        </button>
        <button className="buttonTodos">
          <p>Todos</p>
          <img src={iconComida} alt="icono comida" />
        </button>
      </div>
      <div className="side-recetas">
        {/* <Sidebar /> */}
        <div className="recetasGaleria">

          {data.slice(0, countCard).map((receta, index) => {

         // {props.data.map((receta, index) => {

            return (
              <div key={index}>
                <Link to={`/itemDetails/${receta.id}`}>
                  <Recetas
                    receta={receta}
                    setData={props.setData}
                    index={index}

                    data={data} //nuevo archivo de datos

                   // data={props.data}//nuevo archivo de datos

                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="buttonMostrarMas">
        <button onClick={handleAdd}>
          <p>Mostrar mas</p>
        </button>
      </div>

      <Footer />
    </div>
  );
};
