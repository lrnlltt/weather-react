import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon.js"
import "./Weather.css"; 

export default function WeatherInfo(props) {
    return (
        <div className="row weather-container">
            <div className="col-3 details-bar">
                <h2>{props.data.city}</h2>
                <FormattedDate date={props.data.date}/>
                <h3 className="text-capitalize">{props.data.description}</h3>
            </div>
            <div className="col-6 weather text-center">
                <div id="temp-container">
                <h1>
                    <WeatherIcon code={props.data.icon}/>
                    <span>28</span>°
                    <span id="temp-converters">
                    <a href="#" className="active">
                        C°{" "}
                    </a>{" "}
                    |<a href="#"> F°</a>
                    </span>
                </h1>
                </div>
            </div>
            <div className="col-3">
                <ul>
                <li>Feels like {props.data.feelsLike}°</li>
                <li>Humidity {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
                </ul>
            </div>
        </div>
    );
}