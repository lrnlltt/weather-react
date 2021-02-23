import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius")

    function Celsius() {
        return props.temp;
    }

    function Fahrenheit() {
        return (props.temp * 9) / 5 +32; 
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");  
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
    return (
        <div className="weather-temperature">
            <h1>{Math.round(Celsius())}°</h1>
            <span id="temp-converters">
                C° |<a href="/" onClick={showFahrenheit}> F°</a>
            </span>
        </div>
    );
    } else {
        return (
            <div className="weather-temperature">
                <h1>{Math.round(Fahrenheit())}°</h1>
                <span id="temp-converters">
                    <a href="/" onClick={showCelsius}>C°</a> | F°
                </span>
            </div>
        );
    }
}