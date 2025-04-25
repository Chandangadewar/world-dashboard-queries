import React, { useEffect, useState } from 'react';
import { getTop10LeastPopulatedCountries } from '../API/api';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#ff69b4', '#ffb347', '#87cefa', '#dda0dd', '#90ee90'];

const TopTenLeastPopulatedCountries = () => {
  const [topTlpc, settopTlpc] = useState([]);

  useEffect(() => {
    const fetchLeastPc = async () => {
      const response = await getTop10LeastPopulatedCountries();
      settopTlpc(response);
    };
    fetchLeastPc();
  }, []);

  return (
    <div style={{ width: '90%', height: 400, margin: 'auto' }}>
      <h3 style={{ textAlign: 'center' }}>Top 10 Least Populated Countries</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={topTlpc}
            dataKey="Population"
            nameKey="Name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {topTlpc.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopTenLeastPopulatedCountries;
