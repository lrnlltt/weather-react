import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [ loaded, setLoaded ] = useState(false);
    const [ forecast, setForecast ] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }
    
    if (loaded && props.city === forecast.city.name) {
        return (
        <div className="WeatherForecast row">
            {forecast.list.slice(0 ,5).map(function(forecastItem) {
                return <WeatherForecastPreview data={forecastItem}/>
            })}
        </div>
        );
    } else { 
    let apiKey ="560ccf0a9b6f4d30ed340bdb4dfaf585"
    let apiUrl =`https:api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
    }
}