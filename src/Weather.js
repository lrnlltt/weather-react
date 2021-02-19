import React from "react";
import Temperature from "./Temperature";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Melbourne",
    date: "11/02/2021",
    description: "Raining",
    feelsLike: 20,
    humidity: 80,
    wind: 3
  };
  return (
    <div className="row weather-container">
      <div className="col-3 details-bar">
        <h2>{weatherData.city}</h2>
        <h4>{weatherData.date}</h4>
        <h3>{weatherData.description}</h3>
      </div>
      <div className="col-6 weather">
        <Temperature />
      </div>
      <div className="col-3">
        <ul>
          <li>Feels like {weatherData.feelsLike}°</li>
          <li>Humidity {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
