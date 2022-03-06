import React, {useState, Fragment} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CSS/Dashboard.css';
import Header from './Header';

import backButton from "./Assets/backButton.png"

import SideNav from './SideNav';

function WeatherForecast (props){
  
  const navigate = useNavigate();
  const {state} = useLocation();

  const [startDate, setStartDate] = useState(state.startDate);
  const [location, setLocation] = useState(state.location);
  const [endDate, setEndDate] = useState(state.endDate);

  const [minTemp, setMinTemp] = useState(state.minTemp);
  const [maxTemp, setMaxTemp] = useState(state.maxTemp);
  const [humidity, setHumidity] = useState(state.humidity);
  const [pressure, setPressure] = useState(state.pressure);
  const [weather, setWeatherState] = useState(state.weather);

  const [isForecast, setIsForecast] = useState(false);

  const API = "http://localhost:8008"
  const API2 = "http://localhost:8888"

  const onClick_back = () => {
    console.log('Data Retrieval Page');
    navigate(`/dashboard/data`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId, 'loginType':state.loginType}});
  };

  return (
    <div class = 'service-container'>
      <Header name={state.name} loginType= {state.loginType}/>
      <div class = 'service-page-header'>
        <div class = 'back-btn-div'>
          <button class ='back-btn' onClick={onClick_back}>
            <img src = {backButton} class ='back-btn-img'></img>
          </button>
        </div>
        <h4>Weather Forecast</h4>
      </div>
      <div class = 'weather-forecast-container'>
          <p> Weather Forecast </p>
          <div class = 'weather-forecast'>
            <div class = 'weather-forecast-item'>
              <div class="weather-number"><p>{minTemp}C</p></div>
              <div class="weather-type"><p>Min Temp</p></div>
            </div>    
            <div class = 'weather-forecast-item'>
              <div class="weather-number"><p>{maxTemp}C</p></div>
              <div class="weather-type"><p>Max Temp</p></div>
            </div> 
            <div class = 'weather-forecast-item'>
              <div class="weather-number"><p>{humidity}</p></div>
              <div class="weather-type"><p>Humidity</p></div>
            </div> 
            <div class = 'weather-forecast-item'>
              <div class="weather-number"><p>{pressure}</p></div>
              <div class="weather-type"><p>Pressure</p></div>
            </div> 
            <div class = 'weather-forecast-item'>
              <div class="weather-number"><p>{weather}</p></div>
              <div class="weather-type"><p>Weather</p></div>
            </div>  
          </div>
        </div>
    </div>
  );
}
export default WeatherForecast;
