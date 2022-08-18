import React from "react";
import { getDayName } from "./Utility";
 // Drawbacks of API,
// The weather forecast data ( freely available ) , has data for 5 days

const WeatherForecast = (props) => {
    let weatherForeCastData = props.forecastweather;
    let foreCastArr = [];
    for (let i = 0; i < weatherForeCastData.list.length; i += 8) {
        foreCastArr.push(weatherForeCastData.list[i]);
    }
    return (
        <div className="row justify-content-between w-100 mt-4">
            {foreCastArr.map((item, index) => {
                return (
                    <div className="col-12 col-md-2 bg-white rounded border" key={index}>
                        <div className="row justify-content-center py-2">
                            <h6>{index === 0 ? "Today" : getDayName(item.dt)}</h6>
                        </div>
                        <div className="row justify-content-center">
                            <img
                                src={`icons/${item.weather[0].icon}.png`}
                                className="icon-small"
                                alt="weather"
                                width={40}
                            />
                        </div>
                        <div className="row justify-content-center">
                            <span><span className="font-weight-bold">{ Math.round(item.main.temp)}</span><sup>{props.metric ==='metric'?'C' : 'F' }</sup></span>
                        </div>
                        <div className="row justify-content-center">
                            { item.weather[0].main}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default WeatherForecast;
