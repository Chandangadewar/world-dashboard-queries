import React, { useEffect, useState } from "react";
import axios from "axios";

const AveragePopulation = () => {
  const [avg, setAvg] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/average-population`)
      .then((res) => setAvg(res.data.averagePopulation))
      .catch((err) => console.error("Error fetching average population:", err));
  }, []);

  return (
    <div>
      <h2>Average Population</h2>
      <p>{avg ? avg.toLocaleString() : "Loading..."}</p>
    </div>
  );
};

export default AveragePopulation;
