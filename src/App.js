import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Weather from "./Weather";
import './App.css';

export default function App(props) {
  const [weather, setWeather] = useState({loaded: false});
  const [city, setCity] = useState(props.showCity);

  function displayWeather(response){
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt*1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity
    });
  }

  function search(){
    const apiKey = "e6fd7ecc8e8874aa21ff2b9996064645";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function showCity(event){
    setCity(event.target.value);
  }

  if (weather.loaded){
  return (
    <div className="App">
      <div className="App-wrapp">
        <form  onSubmit={handleSubmit} className="form">
          <div className="row">
            <div className="col-7 mt-3 mx-3">
              <input className="form-control form-control-sm" type="search" placeholder="Enter city" autocomplete="off" onChange={showCity}/>
          
        <div className="col-2 gap-3 d-flex mt-3 mx-2">
        <button className="btn btn-sm btn-primary-outline search-city-button" type="submit" id="search">
        <i className="fas fa-search"></i>
        </button>
        </div>
        </div></div>
        </form>
        
          <Weather data={weather} />
      </div> 
      </div>
        );
  } else{
    search();
    return (
      <Loader
        type="Circles"
        color="black"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    );
  }
}

