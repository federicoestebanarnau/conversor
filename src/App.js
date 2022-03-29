import React from "react";
import { Routes, Route } from "react-router-dom";
import AcercaDe from "./Components/acercaDe";
import Home from "./Components/home";
import "./Components/contenedor.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AcercaDe />} />
      </Routes>
    </div>
  );
}

export default App;
