import React, { useEffect, useState } from "react";
import axios from "axios";

const LargestCities = () => {
  const [cities, setCities] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/largest-cities`)
      .then((res) => setCities(res.data))
      .catch((err) => console.error("Error fetching cities:", err));
  }, []);

  return (
    <div>
      <h2>Largest Cities</h2>
      {cities.length === 0
        ? "Loading..."
        : cities.map((c, i) => <p key={i}>{c.name} — {c.population.toLocaleString()}</p>)}
    </div>
  );
};

export default LargestCities;
