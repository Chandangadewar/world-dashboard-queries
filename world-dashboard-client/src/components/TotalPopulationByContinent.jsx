import React, { useEffect, useState } from "react";
import axios from "axios";

const TotalPopulationByContinent = () => {
  const [data, setData] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/population-by-continent`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching continent data:", err));
  }, []);

  return (
    <div>
      <h2>Total Population by Continent</h2>
      {data.length === 0
        ? "Loading..."
        : data.map((c) => (
            <p key={c.continent}>
              {c.continent}: {c.totalPopulation.toLocaleString()}
            </p>
          ))}
    </div>
  );
};

export default TotalPopulationByContinent;
