import React, { useEffect, useState } from "react";
import axios from "axios";

const TotalLanguages = () => {
  const [count, setCount] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/total-languages`)
      .then((res) => setCount(res.data.totalLanguages))
      .catch((err) => console.error("Error fetching language count:", err));
  }, []);

  return (
    <div>
      <h2>Total Languages</h2>
      <p>{count ? count : "Loading..."}</p>
    </div>
  );
};

export default TotalLanguages;
