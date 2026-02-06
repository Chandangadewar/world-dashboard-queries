import axios from "axios";

// Use environment variable or fallback to localhost
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/dashboard/";

const api = axios.create({ baseURL: BASE_URL });

export const apiRequest = async (endpoint, data = {}, method = 'get') => {
    try {
        const response = await api.request({
            url: endpoint,
            method,
            data,
        });
        return response.data;
    } catch (error) {
        console.log("Error Found", error);
        throw error;
    }
};

// total population
export const totalPopulation = async () => await apiRequest('/total-population');

// total countries
export const totalCountries = async () => await apiRequest('/total-countries');

// Top10PopulatedCountries
export const getTop10PopulatedCountries = async () => await apiRequest('/top-10-populated-countries');

export const getTop10LeastPopulatedCountries = async () => await apiRequest('/top-10-least-populated-countries');

export const getAveragePopulation = async () => await apiRequest('/average-population');

export const getTotalPopulationByContinent = async () => await apiRequest('/total-population-by-continent');


export const getTotalLanguages = async () => await apiRequest('/total-languages');

export const getTop10Languages = async () => await apiRequest('/top-10-languages');

export const getLargestCities = async () => await apiRequest('/largest-cities');
