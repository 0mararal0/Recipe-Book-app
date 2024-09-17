import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="containerApp">
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;
