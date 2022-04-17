import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Components/contenedor.css";

function Home() {
  const [symbol, setSymbol] = useState([]);
  const [changeDe, setChangeDe] = useState("USD");
  const [changeA, setChangeA] = useState("ARS");
  const [precio, setPrecio] = useState("");
  const [precioGuardado, setPrecioGuardado] = useState("");
  const [precioDe, setPrecioDe] = useState(1);

  useEffect(() => {
    axios.get("https://api.exchangerate.host/symbols").then((res) => {
      setSymbol(Object.entries(res.data.symbols));
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.exchangerate.host/convert?from=${changeDe}&to=${changeA}`
      )
      .then((res) => {
        setPrecioGuardado(res.data.info.rate);
      });
  }, [changeDe, changeA]);

  useEffect(() => {
    const resultado = precioGuardado * precioDe;
    setPrecio(resultado.toFixed(2));
  }, [precioDe]);

  console.log("change de:", changeDe);
  console.log("change a:", changeA);

  return (
    <>
      <div className="contenedor">
        <h1 className="titulo">Conversor de divisas</h1>
        <div className="items">
          <form className="convertirDe">
            <label className="texto1" htmlFor="favoriteOnly">
              Convertir de:
            </label>
            <select
              onChange={(props) => setChangeDe(props.target.value)}
              value={changeDe}
              className="select1"
              name="favoriteOnly"
              id="favoriteOnly"
            >
              {symbol.map((r) => (
                <option key={r[0]}>{r[0]}</option>
              ))}
            </select>
            <input
              className="select2"
              type="number"
              onChange={(props) => setPrecioDe(props.target.value)}
              value={precioDe}
            ></input>
          </form>

          <form className="convertirA">
            <label className="texto2" htmlFor="favoriteOnly">
              A:
            </label>
            <select
              onChange={(props) => setChangeA(props.target.value)}
              className="select1"
              value={changeA}
              name="favoriteOnly"
              id="favoriteOnly"
            >
              {symbol.map((r) => (
                <option key={r[0]}>{r[0]}</option>
              ))}
            </select>
            <input
              className="select2"
              type="text"
              onChange={(props) => setPrecioGuardado(props.target.value)}
              value={precio}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
