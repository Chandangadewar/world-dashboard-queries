import { sequelize } from "../config/db.js"

export const getTotalPopulation = async(req,res)=>{
try {
    const q1= `SELECT SUM(Population) AS TotalPopulation FROM country` 
    const totalPopulation = await sequelize.query(q1) ;
    const tP = totalPopulation[0]
    const tP1 = tP[0].TotalPopulation
    console.log(totalPopulation[0]);
    res.status(200).send(tP1)
} catch (error) {
    res.status(500).send({error:error})
}
}

export const getTop10PopulatedCountries = async(req,res)=>{
    try {
        const q2 = `select Name , Population FROM country ORDER BY Population DESC limit 10`
        const top10PopulatedCountries = await sequelize.query(q2);
        res.status(200).send(top10PopulatedCountries[0])   
    } catch (error) {
        res.status(500).send({error:error})
    }

}
export const getTop10LeastPopulatedCountries = async(req,res)=>{
   try {
    const q3 = `select Name , Population FROM country ORDER BY Population ASC limit 10;`
    const top10LeastPopulatedCountries = await sequelize.query(q3);
    console.log(top10LeastPopulatedCountries);
    res.status(200).send(top10LeastPopulatedCountries[0])
   } catch (error) {
    res.status(500).send({error:error})
   }
}
export const getTotalCountries = async (req,res)=>{
    try {
        const q4= `select count(Code) as totalCountry from country;` 
        const totalCountries = await sequelize.query(q4);
        const TC = totalCountries[0]
        const TCValue = TC[0]
        res.status(200).send(TCValue.totalCountry)
    } catch (error) {
        res.status(500).send({error:error})
    }

}
export const getAveragePopulation = async(req,res)=>{
    try {
        const q5 = `select AVG(Population) AS AveragePopulation FROM country;`
        const averagePopulation = await sequelize.query(q5);
        const Ap = averagePopulation[0]
        const Ap1 = Ap[0].AveragePopulation
        res.status(200).send(Ap1)
        
    } catch (error) {
        
    }

}
export const getTotalPopulationByContinent = async (req,res)=>{
    try {
        const q6= `select Continent, sum(Population) as CPopulation from country group by Continent;` 
        const totalPopulationByContinent = await sequelize.query(q6);
        const tPbC = totalPopulationByContinent[0]
        res.status(200).send(totalPopulationByContinent[0])
    } catch (error) {
        res.status(500).send({error:error})
    }

}
export const getTotalLanguages = async(req,res)=>{
    try {
        const q7 = `select count(DISTINCT LANGUAGE) AS TotalLanguages FROM countrylanguage;`
        const totalLanguage = await sequelize.query(q7);
        const tL = totalLanguage[0];
        const tL1 = tL[0].TotalLanguages
        res.status(200).send(tL1)
    } catch (error) {
        res.status(500).send({error:error})
    }

}
export const getTop10Languages = async(req,res)=>{
    try {
        const q8 = `select Language , COUNT(*) AS CountryCount FROM countrylanguage GROUP BY Language ORDER BY CountryCount DESC LIMIT 10;`
        const topTenLanguages = await sequelize.query(q8);
        const ttl = topTenLanguages[0]
        res.status(200).send(ttl)
    } catch (error) {
        res.status(500).send({error:error})
    }

}
export const getLargestCities = async(req,res)=>{
    try {
        const q9 = `select Name , Population FROM city ORDER BY Population DESC limit 10;`
        const largestCities = await sequelize.query(q9);
        const lC = largestCities[0]
        res.status(200).send(lC)
    } catch (error) {
        res.status(500).send({error:error})
        
    }
}