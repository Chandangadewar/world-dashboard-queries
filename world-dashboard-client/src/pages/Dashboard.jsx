import React from 'react'
import TotalPopulation from '../components/TotalPopulation'
import TotalCountries from '../components/TotalCountries'
import TopTenPopulatedCountries from '../components/TopTenPopulatedCountries'
import TopTenLeastPopulatedCountries from '../components/TopTenLeastPopulatedCountries'
import AveragePopulation from '../components/AveragePopulation'
import TotalPopulationByContinent from '../components/TotalPopulationByContinent'
import TotalLanguages from '../components/TotalLanguages'
import ToptenLanguages from '../components/ToptenLanguages'
import LargestCities from '../components/LargestCities'

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'red', textAlign: 'center', height : '100px ' , fontSize : '4rem'}}>Dashboard</h1>

      <div style={{ marginBottom: '40px' }}>
        <TotalPopulation />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <TotalCountries />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <TopTenPopulatedCountries />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <TopTenLeastPopulatedCountries />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <AveragePopulation />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <TotalPopulationByContinent />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <TotalLanguages />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <ToptenLanguages />
      </div>

      <div style={{ marginBottom: '40px' }}>
        <LargestCities />
      </div>
    </div>
  )
}

export default Dashboard
