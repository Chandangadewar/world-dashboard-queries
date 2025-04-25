import React, { useEffect, useState } from 'react';
import { getTop10PopulatedCountries } from '../API/api';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const TopTenPopulatedCountries = () => {
  const [top10C, setTopC] = useState([]);

  useEffect(() => {
    const fetchToptenPc = async () => {
      const response = await getTop10PopulatedCountries();
      setTopC(response);
    };
    fetchToptenPc();
  }, []);

  return (
    <div style={{ width: '90%', height: 400, margin: 'auto' }}>
      <h3 style={{ textAlign: 'center' }}>Top 10 Populated Countries</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={top10C}
          margin={{
            top: 10, right: 20, left: 10, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Population" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopTenPopulatedCountries;
