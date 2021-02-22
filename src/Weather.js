import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  cosnt [weatherData, setWeatherData] = useState({ ready : false }); 

  function handleresponse(response) {
    console.log(response.target.value)
    setReady(true);
    setWeatherData({
      ready: true,
      city: response.data.main.temp,
      date: "11/02/2021",
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feeks_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    }
    );
  }

  if (weatherData) {
  return (
    <div className="row weather-container">
      <div className="col-3 details-bar">
        <h2>{weatherData.city}</h2>
        <h4>{weatherData.date}</h4>
        <h3 className="text-capitalize">{weatherData.description}</h3>
      </div>
      <div className="col-6 weather">
        <div id="temp-container">
          <h1>
            <img
              src={weatherData.icon}
              id="weather-icon"
              alt="weather icon"
            />
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
          <li>Feels like {weatherData.feelsLike}°</li>
          <li>Humidity {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
  } else {
    let apiKey = "560ccf0a9b6f4d30ed340bdb4dfaf585"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleresponse)
  }
}
