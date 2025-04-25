import React, { useEffect, useState } from 'react'
import { getTop10Languages } from '../API/api'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ToptenLanguages = () => {
  const [topTL, settopTL] = useState([])

  useEffect(() => {
    const fetchToptL = async () => {
      const response = await getTop10Languages()
      settopTL(response)
    }
    fetchToptL()
  }, [])

  return (
    <div style={{ margin: '40px 0' }}>
      <h3>Top 10 Languages By Country Count</h3>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={topTL}
          margin={{
            top: 20, right: 30, left: 0, bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Language" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="CountryCount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ToptenLanguages
