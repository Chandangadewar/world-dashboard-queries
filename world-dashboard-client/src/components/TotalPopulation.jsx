import React, { useEffect , useState } from 'react'
import {totalPopulation} from '../API/api'

const TotalPopulation = () => {
    const[totalPop , setTotalPop] = useState([]);
    
    const fetchapi = async()=>{
      const totalPop = await totalPopulation();
      console.log(totalPop);
      setTotalPop(totalPop)
      
    }
    useEffect (()=>{
          fetchapi()
    

    } , [])
  return (
    <div>
      <h2 style={{color : '#638fd6'}}>TotalPopulation : {totalPop} </h2>
      </div>
  )
}

export default TotalPopulation