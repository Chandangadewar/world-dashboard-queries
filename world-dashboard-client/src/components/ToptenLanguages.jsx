import React, { useEffect, useState } from "react";
import axios from "axios";

const ToptenLanguages = () => {
  const [languages, setLanguages] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/api/top-languages`)
      .then((res) => setLanguages(res.data))
      .catch((err) => console.error("Error fetching languages:", err));
  }, []);

  return (
    <div>
      <h2>Top 10 Languages</h2>
      {languages.length === 0
        ? "Loading..."
        : languages.map((lang, i) => <p key={i}>{lang.language} — {lang.count}</p>)}
    </div>
  );
};

export default ToptenLanguages;
