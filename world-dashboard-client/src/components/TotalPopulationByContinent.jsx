import React, { useEffect, useState } from 'react'
import { getTotalPopulationByContinent } from '../API/api'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const TotalPopulationByContinent = () => {
  const [totalPbC, settotalPbc] = useState([])

  useEffect(() => {
    const fetchTotalPbyC = async () => {
      const response = await getTotalPopulationByContinent()
      settotalPbc(response)
    }
    fetchTotalPbyC()
  }, [])

  return (
    <div style={{ margin: '40px 0' }}>
      <h3>Total Population By Continent</h3>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={totalPbC}
          margin={{
            top: 20, right: 30, left: 0, bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Continent" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="CPopulation" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TotalPopulationByContinent
