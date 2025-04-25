import React, { useEffect, useState } from 'react'
import { totalCountries } from '../API/api'

const TotalCountries = () => {
const [toCount , setToCount] = useState([]);

useEffect(()=>{
   const tC = totalCountries();
   setToCount(tC)
    
} ,[])

  return (
    <div>
       <h1 style={{color : '#ce63d6'}}> TotalCountries : {toCount} </h1>
    </div>
  )
}

export default TotalCountries