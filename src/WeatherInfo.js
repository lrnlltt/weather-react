import React from "react";
import WeatherIcon from "./WeatherIcon.js"
import WeatherTemperature from "./WeatherTemperature"
import "./Weather.css"; 

export default function WeatherInfo(props) {
    return (
        <div className="row weather-container">
            <div className="col weather text-center">
                <h2>{props.data.city}</h2>
                <div id="temp-container">
                    <WeatherIcon code={props.data.icon}/>
                    <WeatherTemperature temp={props.data.temperature}/>
                </div>
                <h3 className="text-capitalize">{props.data.description}</h3>
            </div>
            <div className="row temp-details">
                <ul>
                    <li>Feels like {Math.round(props.data.feelsLike)}°</li>
                    <li>Humidity {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind}km/h</li>
                </ul>
            </div>
        </div>
    );
}