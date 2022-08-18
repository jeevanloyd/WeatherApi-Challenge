import React from "react";
import { convertDate } from "./Utility";

// This components is reused , It gives data for current weather based on device location and based on geocordinates from seach API
const CurrentWeatherComponent = (props) => {
    let weatherData = props.weather;
    return (
        <div className="row justify-content-between">
            <div className="col-12 col-md-4 bg-white rounded border">
                <div className="row">
                    <h3>{weatherData.name}</h3>
                </div>
                <div className="row justify-content-center">{convertDate(weatherData.dt)}</div>
                <div className="row justify-content-center">{weatherData.weather[0].main}</div>
                <div className="row d-flex align-top justify-content-center ">
                    <img
                        src={`icons/${weatherData.weather[0].icon}.png`}
                        className="icon-small"
                        alt="weather"
                        width={20}
                    />
                    
                </div><div className="row justify-content-center ">
                            <span><h3><span className="font-weight-bold">{ Math.round(weatherData.main.temp)}</span><sup>{props.metric ==='metric'?'C' : 'F' }</sup></h3></span>
                        </div>
            </div>
            <div className="col-12 col-md-4 justify-content-end ">
                <div className="row w-100"><span className="text-muted">feels like: &nbsp; </span><span className="font-weight-bold">{Math.round(weatherData.main.feels_like)}<sup>{props.metric ==='metric'?'C' : 'F' }</sup> </span></div>
                <div className="row w-100"><span className="text-muted">Humidity:&nbsp; </span><span className="font-weight-bold">{weatherData.main.humidity} %</span></div>
                <div className="row w-100"><span className="text-muted">Wind Speed: &nbsp;</span><span className="font-weight-bold">{weatherData.wind.speed} {props.metric ==='metric'?'m/s' : 'mph' }</span></div>
            </div>
        </div>
    );
};

export default CurrentWeatherComponent;
