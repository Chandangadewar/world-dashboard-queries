import React, { useEffect, useState } from "react";
import axios from "axios";

const TopTenLeastPopulatedCountries = () => {
  const [data, setData] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/least-populated`)
      .then((res) => setData(res.data))
      .catch((err) =>
        console.error("Error fetching least populated countries:", err)
      );
  }, []);

  return (
    <div>
      <h2>Least Populated Countries</h2>
      {data.length === 0 ? <p>Loading...</p> : data.map((c, i) => <p key={i}>{c.name} - {c.population.toLocaleString()}</p>)}
    </div>
  );
};

export default TopTenLeastPopulatedCountries;
