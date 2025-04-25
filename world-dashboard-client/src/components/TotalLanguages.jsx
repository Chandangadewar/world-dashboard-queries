import React, { useEffect, useState } from 'react'
import { getTotalLanguages } from '../API/api'

const TotalLanguages = () => {
    const[totalL , settotalL] = useState([])

    useEffect(()=> {
        const tL =  getTotalLanguages();
        settotalL(tL);
    }, [])



  return (

    <div>
         <h1 style={{color : 'red'}}>TotalLanguages: {totalL} </h1>

    </div>
  )
}

export default TotalLanguages