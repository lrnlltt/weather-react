import React, { useState } from "react";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import FormattedDate from "./FormattedDate"
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready : false }); 
  const [city, setCity] = useState(props.DefaultCity); 
  let apiKey = "560ccf0a9b6f4d30ed340bdb4dfaf585"
  let urlApi = " ";
  
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleresponse)
  }

  function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude; 
    let lon = position.coords.longitude;
    urlApi= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    axios.get(urlApi).then(handleresponse);
  }); 
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    search(); 
  }

  function handleresponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt *1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
    }
    );
  }

  if (weatherData.ready) {
  return (
    <div>
      <div className="formattedDate">
      <FormattedDate date={weatherData.date}/>
      </div>
      <form className="input-group" id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a City"
          className="form-control search-bar"
          id="search-bar"
          autoComplete="off"
          autoFocus="on"
          onChange={handleChange}
        />
        <div className="input-group-btn d-gap gap-2 d-md-block" id="buttons">
          <input
            type="submit"
            className="btn btn-info search-button btn-outline-info"
            value="Search"
          />
          <input
            type="button"
            className="btn btn-light current-button btn-outline-secondary"
            value="Current Location"
            onClick={currentLocation}
          />
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      <WeatherForecast city={weatherData.city}/>
    </div>
  );
  } else {
    search();
    return (
      <div className="text-center">
          <Loader
          type="ThreeDots"
          color="#FFFFFF"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
      </div>
    )
  }
}
