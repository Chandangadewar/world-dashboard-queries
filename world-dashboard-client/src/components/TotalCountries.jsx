import React, { useEffect, useState } from "react";
import axios from "axios";

const TotalCountries = () => {
  const [count, setCount] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/total-countries`)
      .then((res) => setCount(res.data.totalCountries))
      .catch((err) => console.error("Error fetching total countries:", err));
  }, []);

  return (
    <div>
      <h2>Total Countries</h2>
      <p>{count !== null ? count : "Loading..."}</p>
    </div>
  );
};

export default TotalCountries;
