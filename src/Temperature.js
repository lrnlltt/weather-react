import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div id="temp-container">
      <h1>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
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
  );
}
