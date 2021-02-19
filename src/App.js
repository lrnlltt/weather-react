import React, { useState } from "react";
import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App(props) {
  const [temperature, setTemperature] = useState("");

  function findTemp(response) {
    setTemperature(response.data.main.temp);
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=560ccf0a9b6f4d30ed340bdb4dfaf585&units=metric`
  axios.get(apiUrl).then(findTemp);
  return (
    <div className="App">
      <h2>The temperature is currently {Math.round(temperature)}° in {props.city}</h2>
    </div>
  );
}

export default App;
