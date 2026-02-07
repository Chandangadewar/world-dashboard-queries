import React, { useEffect, useState } from "react";
import axios from "axios";

const TopTenPopulatedCountries = () => {
  const [data, setData] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/top-populated`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching top populated countries:", err));
  }, []);

  return (
    <div>
      <h2>Top 10 Populated Countries</h2>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((c, i) => (
            <li key={i}>{c.name} — {c.population.toLocaleString()}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopTenPopulatedCountries;
