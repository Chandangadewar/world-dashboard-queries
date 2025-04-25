import React, { useEffect ,useState } from 'react'
import { getAveragePopulation } from '../API/api'

const AveragePopulation = () => {
    const[averageP , setAverageP] = useState()

    useEffect(()=>{
        const tA = getAveragePopulation();
        setAverageP(tA);
    } , [])

  return (
    <div>
       <h1 style={{color : '#63aed6'}}>AveragePopulation : {averageP} 

         </h1>
         
          </div> 
  )
}

export default AveragePopulation 