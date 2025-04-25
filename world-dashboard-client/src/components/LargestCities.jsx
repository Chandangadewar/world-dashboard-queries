import React, { useEffect, useState } from 'react'
import { getLargestCities } from '../API/api'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871']

const LargestCities = () => {
  const [largestC, setLargestC] = useState([])

  useEffect(() => {
    const fetchLargestC = async () => {
      const response = await getLargestCities()
      setLargestC(response)
    }
    fetchLargestC()
  }, [])

  return (
    <div style={{ margin: '40px 0' }}>
      <h3>Largest Cities by Population (Donut Chart)</h3>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={largestC}
            dataKey="Population"
            nameKey="Name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={140}
            fill="#8884d8"
            label
          >
            {largestC.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LargestCities
