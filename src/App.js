// test
import React, { useEffect, useState } from 'react';
import s from './App.css';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    const location = axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Polokwane&aqi=yes`)
      .then(data => {
        setWeather(data.data)
      })
      .catch(err => console.log(err));
  }, []);
  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const searchWeather = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`)
      .then(data => {
        setWeather(data.data);
      })
  }
  return (
    <div className="App">
      {weather && (
        <div>
          <div className="search">
            <input onChange={weatherInput} type="text" />
            <button onClick={searchWeather} >Search</button>
            <div>
              <div className="weather-info">
                <h1>{weather.location.name}</h1>
                <h2>{weather.location.region}</h2>
                <div className="condition">
                  <h3>The current weather is {weather.current.temp_c}° Celcius</h3>
                  <img src={weather.current.condition.icon} alt='The current weather condition icon' />
                  <h3>The current weather is {weather.current.temp_f}° Fahrenheit</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
