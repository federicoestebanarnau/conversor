import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [rate, setRates] = useState([]);

  useEffect(() => {
    axios.get("https://api.exchangerate.host/latest").then((res) => {
      setRates(Object.entries(res.data.rates));
    });
  }, []);

  return (
    <>
      {rate.map((r) => (
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
