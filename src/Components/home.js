import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [rate, setRates] = useState([]);

  let objetoArray = Object.entries(rate);

  useEffect(() => {
    axios.get("https://api.exchangerate.host/latest").then((res) => {
      setRates(res.data.rates);
    });
  }, []);

  return (
    <>
      {objetoArray.map((r) => (
        <ul key={r[1]}>
          <li>
            {r[0]}: {r[1]}
          </li>
        </ul>
      ))}
    </>
  );
}

export default Home;
