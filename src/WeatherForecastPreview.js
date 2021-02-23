import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hour = date.getHours();
        
        if(hour > 12) {
            hour =  hour - 12;
        }
        if(hour === 0) {
            hour = 12;
            }

        return `${hour}:00`; 
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp)

        return `${temperature}°C`;
    }

    return (
        <div className="col">
            {hours()}
            <WeatherIcon code={props.data.weather[0].icon} />
            {temperature()}
        </div>
    )
}