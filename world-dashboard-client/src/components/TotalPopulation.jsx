import React, { useEffect, useState } from "react";
import axios from "axios";

const TotalPopulation = () => {
  const [population, setPopulation] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/total-population`)
      .then((res) => setPopulation(res.data.totalPopulation))
      .catch((err) => console.error("Error fetching total population:", err));
  }, []);

  return (
    <div>
      <h2>Total Population</h2>
      <p>{population !== null ? population.toLocaleString() : "Loading..."}</p>
    </div>
  );
};

export default TotalPopulation;
