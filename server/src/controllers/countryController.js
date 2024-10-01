const axios = require('axios');
require("dotenv").config();
const { API_URL, API_URL_2 } = process.env;

const getAllCountries = async (req, res) => {
    try {
        const response = await axios(`${API_URL}/AvailableCountries`);
        const countries = response.data.map((country) => ({
            id: country.countryCode,
            name: country.name
        }));
        res.status(200).json(countries);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.error(error);
    }
};


const getCountryById = async (req, res) => {
    const { id } = req.params;
    try {
        
        const countryResponse = await axios(`${API_URL}/CountryInfo/${id}`);
        const country = countryResponse.data;

        const flagResponse = await axios(`${API_URL_2}/flag/images`);
        const flagData = flagResponse.data.data;

        const populationResponse = await axios(`${API_URL_2}/population`);
        const populationData = populationResponse.data.data;

        let flag = flagData.find(f => f.iso2 === country.countryCode);

        
        let population = populationData.find(p => p.code.includes(country.countryCode));

        
        if (!population && flag) {
            population = populationData.find(p => p.iso3 === flag.iso3);
        }

        
        if (flag || population) {
            const countryData = {
                id: country.countryCode,
                flag: flag?.flag , 
                name: country.commonName,
                officialName: country?.officialName || 'No official name available',
                region: country?.region || 'No region available',
                borders: country?.borders || [],
                population: population?.populationCounts || 'No population data available',
            };
            res.status(200).json(countryData);
        } else {
            
            res.status(404).json({ message: `No information available for the country with id: ${id}` });
        }
    } catch (error) {
        res.status(400).json({ message: `Error searching for country with id: ${id}` });
        console.error(error);
    }
};


module.exports = {
    getAllCountries,
    getCountryById
};
