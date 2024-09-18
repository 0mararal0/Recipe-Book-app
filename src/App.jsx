import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import recipes from "./assets/recipes.json"
import { Recetas } from "./components/Recetas/Recetas";


function App() {
  const [data, setData] = useState(recipes)

  

  return (
    <>
      <div className="containerApp">

        <Navbar />
      <div className="side-recetas">
        <div className="recetasGaleria">
        {data.map((receta, index) => {
      return(
        <div key={index} >
          <Recetas receta={receta} setData={setData} index={index} data={data}/>

        </div>
        )
          })}

        
        </div>
      
      
  
        <Sidebar />
      </div>
    
        <Footer />
      </div>
    </>
  );
}

export default App;
