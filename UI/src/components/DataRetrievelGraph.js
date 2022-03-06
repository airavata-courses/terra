import React,{useState, Fragment} from 'react';
import './CSS/Dashboard.css';

import Header from './Header';
import WeatherForecast from './WeatherForecast';
import DataRetrieval from './DataRetrieval';

import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";

import backButton from "./Assets/backButton.png"

import { useLocation, useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';
import TextField from '@material-ui/core/TextField';


function DataRetrievalGraph(props){

  const navigate = useNavigate();
  const {state} = useLocation();

  const [startDate, setStartDate] = useState(state.startDate);
  const [location, setLocation] = useState(state.location);
  const [endDate, setEndDate] = useState(state.endDate);
  const [imageURL, setImageURL] = useState("");

  const [searchType, setSearchType] = useState("Radar Plot");
  const [searchParam, setSearchParam] = useState("");
  const [searchOutput, setSearchOutput] = useState("")
  
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isImageGenerated, setIsImageGenerated] = useState(false);
  const [isForecast, setIsForecast] = useState(false);

  const [minTemp, setMinTemp] = useState(0.00);
  const [maxTemp, setMaxTemp] = useState(0.00);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [weather, setWeatherState] = useState("");
  const [weather_desc, setWeatherDesc] = useState("");

  const API = "http://localhost:8008"
  const API2 = "http://localhost:8888"

  async function generateWeatherForecast(){
    console.log("Getting Weather Forecast");
    const response = await fetch(API + `/weather?start_date=`+startDate+`&station=`+location, {method: "GET"});
    console.log(response);
    const json = await response.json();
    console.log(json);

    setMinTemp(json.temp_min);
    setMaxTemp(json.temp_max);
    setHumidity(json.humidity);
    setPressure(json.pressure);
    setWeatherState(json.weather);
    setWeatherDesc(json.weather_description);
    setIsForecast(true);

    navigate(`/dashboard/weather`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId, 'loginType':state.loginType, 'startDate':startDate, 'endDate': endDate, 'location': location, 'maxTemp': json.temp_max, 'minTemp':json.temp_min, 'humidity':json.humidity, 'pressure':json.pressure, 'weather':json.weather}});
  }

  const onClick_back = () => {
    console.log('Data Retrieval Page');
    navigate(`/dashboard/data`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId, 'loginType':state.loginType}});
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  return (
    <div class = 'service-container'>
      <Header name={state.name} loginType= {state.loginType}/>
      <div class = 'service-page-header'>
        <div class = 'back-btn-div'>
          <button class ='back-btn' onClick={onClick_back}>
            <img src = {backButton} class ='back-btn-img'></img>
          </button>
        </div>
        <h4>Radar Data Visualization Graph </h4>
      </div>
      <div class = 'output-image-div'>
          <img class = 'output-image' src = {state.image_url}></img>
      </div>
      <div class = 'weather-forecast-navigate-container'>
        <p> Do you want to predict weather forecast for the location {state.location}?</p>
        <button class = 'weather-forecast-btn' onClick={generateWeatherForecast}>Click here to view weather forecast</button>
      </div>
    </div>
  );
}
export default DataRetrievalGraph;
