import React, { useEffect, useState } from "react";
import { BASE_URL, API_KEY, FORECAST_URL } from "../ApiHelpers";
import SearchComponent from "./SearchComponent";
import { SelectUnits } from "./SelectUnits";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import WeatherForecast from "./WeatherForecast";

const axios = require("axios").default;
// This is the main component
// We will use 2 API to fetch CurrentWeather (Weather details shown onload of application) and forecast whether for upcoming 5 days.
// This application is done with React , Javascript, HTML, Boots

const MainComponent = () => {
    const [todayWeather, setTodayWeather] = useState({});
    const [isWeatherFetch, setisWeatherFetch] = useState(false);
    const [forecastWeather, setForecastWeather] = useState({});
    const [isForecastFetch, setisForecastFetch] = useState(false);
    const [metric, setMetric] = useState("metric");
    const [isSearchActive, setisSearchActive] = useState(false);
    const [geoLocation, setGeoLocation] = useState({});

    const getCurrentWeather = (api_url) => {
        axios
            .get(api_url)
            .then(function (response) {
                setisWeatherFetch(true);
                setTodayWeather(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getForecastWeather = (api_url) => {
        axios
            .get(api_url)
            .then(function (response) {
                setisForecastFetch(true);
                setForecastWeather(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
// we will show current weather by default , unless user has searched for location.
// For user search [isSearchActive is set to true] , we must pass cordinates/geolocation , in order to get the weather data.
    useEffect(() => {
        if (isSearchActive) {
            const API_URL =
                BASE_URL +
                `lat=${geoLocation.lat}&lon=${geoLocation.lon}&units=${metric}&appid=` +
                API_KEY;
            const FORECAST_API =
                FORECAST_URL +
                `lat=${geoLocation.lat}&lon=${geoLocation.lon}&units=${metric}&appid=` +
                API_KEY;

            getCurrentWeather(API_URL);
            getForecastWeather(FORECAST_API);
        } else {
            // The Geolocation.getCurrentPosition() method is used to get the current position of the device.

            navigator.geolocation.getCurrentPosition((position) => {
                const API_URL =
                    BASE_URL +
                    `lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${metric}&appid=` +
                    API_KEY;

                const FORECAST_API =
                    FORECAST_URL +
                    `lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${metric}&appid=` +
                    API_KEY;

                getCurrentWeather(API_URL);
                getForecastWeather(FORECAST_API);
            });
        }
    }, [metric, geoLocation,isSearchActive]); // It will call the api , once these values are changed.
    return (
        <div className="container-fluid mt-3 bg-light py-5 px-5">
            <div className="row mb-3 justify-content-between">
                <div className="col-md-4">
                    <SelectUnits metric={metric} setMetric={setMetric} />
                </div>
                <div className="col-md-6 d-flex">
                    <SearchComponent
                        isSearchActive={isSearchActive}
                        setisSearchActive={setisSearchActive}
                        setGeoLocation={setGeoLocation}
                    />
                </div>
            </div>

            {isWeatherFetch ? (
                <CurrentWeatherComponent weather={todayWeather} metric={metric} />
            ) : (
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <div className="row">
                {isForecastFetch ? (
                    <WeatherForecast
                        forecastweather={forecastWeather}
                        metric={metric}
                    />
                ) : (
                    <div>  Loading...
                    </div>
                )}
            </div>

        </div>
    );
};

export default MainComponent;
