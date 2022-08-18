const axios = require("axios").default;

export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"; // Url for current locatio
export const API_KEY = ""; // Please Use API keys from openweathermap
export const BASE_SEARCH_URL = "http://api.openweathermap.org/geo/1.0/direct?q" // Url for search and find geolocation
export const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast?" //Url for forcast Api

export const currentWeatherFn = (API_URL) => {
    axios
        .get(API_URL)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        });
};
