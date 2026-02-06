import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/dashboard/"

const api = axios.create({baseURL:Base_URL})

export const apiRequest = async (endpoint , data = {} , method = 'get') => {
    try {
        const response =  await api.request({
            url : endpoint ,
            method,
            data,
        })
        return response.data
    } catch (error) {
        console.log("Error Found" , error )
        throw error
    }
}

// total population
export const totalPopulation = async ()=>{
    const totalPopu =  await apiRequest('/total-population')
    return totalPopu
}

// total countries

export const totalCountries = async ()=> {
   const tCountries =  await apiRequest('/total-countries')
   return tCountries;
}

// Top10PopulatedCountries

export const getTop10PopulatedCountries = async()=>{
    const Ttpc = await apiRequest('/top-10-populated-countries')
    return Ttpc;
}

export const getTop10LeastPopulatedCountries = async()=>{
    const Ttlp = await apiRequest('/top-10-least-populated-countries')
    return Ttlp;
}

export const getAveragePopulation = async()=>{
    const Ap = await apiRequest('/average-population')
    return Ap;
}

export const getTotalPopulationByContinent = async()=>{
    const Tpbc = await apiRequest('/total-population-by-continent')
    return Tpbc;
}

export const getTotalLanguages = async()=> {
    const tL = await apiRequest('/total-countries')
    return tL;
}

export const getTop10Languages = async()=> {
    const tTenL = await apiRequest('/top-10-languages')
    return tTenL;
}

export const getLargestCities = async()=> {
    const lC = await apiRequest('/largest-cities')
    return lC;
}



// axios.get('http://localhost:8000/dashboard/total-population')

