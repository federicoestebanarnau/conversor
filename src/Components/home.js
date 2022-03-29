import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/contenedor.css";

function Home() {
  const [rate, setRates] = useState([]);

  useEffect(() => {
    axios.get("https://api.exchangerate.host/symbols").then((res) => {
      setRates(Object.entries(res.data.rates));
    });
  }, []);

  return (
    <>
      <div className="contenedor">
        <h1 className="titulo">Conversor de divisas</h1>
        <div className="items">
          <form className="convertirDe">
            <label className="texto1" htmlFor="favoriteOnly">
              Convertir de:
            </label>
            <select className="select1" name="favoriteOnly" id="favoriteOnly">
              {rate.map((r) => (
                <option key={r[1]}>{r[0]}</option>
              ))}
            </select>
            <input
              className="select2"
              type="number"
              placeholder="Ingrese el monto"
            ></input>
          </form>

          <form className="convertirA">
            <label className="texto2" htmlFor="favoriteOnly">
              A:
            </label>
            <select className="select1" name="favoriteOnly" id="favoriteOnly">
              {rate.map((r) => (
                <option key={r[1]}>{r[0]}</option>
              ))}
            </select>
            <input className="select2" type="number"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
