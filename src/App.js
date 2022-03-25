import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AcercaDe from "./Components/acercaDe";
import Home from "./Components/home";

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