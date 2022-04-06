import React,{useState,useEffect, Fragment} from 'react';
import './CSS/Dashboard.css';

import ProgressBar from "./Progress";

import Header from './Header';
import WeatherForecast from './WeatherForecast';
import DataRetrievalGraph from './DataRetrievelGraph';

import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";

import noScans from "./Assets/noScans.png";
import backButton from "./Assets/backButton.png";

import { useLocation, useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';
import TextField from '@material-ui/core/TextField';


function DataRetrieval(props){

  const navigate = useNavigate();
  const {state} = useLocation();

  const [startDate, setStartDate] = useState("2019-06-29T19:20");
  const [location, setLocation] = useState("KCLE");
  const [endDate, setEndDate] = useState("2019-07-27T20:21");
  const [imageURL, setImageURL] = useState(noScans);

  const [searchType, setSearchType] = useState("Data Retrieval");
  const [searchParam, setSearchParam] = useState("");
  const [searchOutput, setSearchOutput] = useState("")
  
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isImageGenerated, setIsImageGenerated] = useState(false);
  const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);

  var isProgressBarVisible2 = false;

  const location_options = [{value:'KABC',label:'KABC'},{value:'KABR',label:'KABR'},{value:'KABX',label:'KABX'},{value:'KACG',label:'KACG'},{value:'KAEC',label:'KAEC'},{value:'KAHG',label:'KAHG'},{value:'KAIH',label:'KAIH'},{value:'KAKC',label:'KAKC'},{value:'KAKQ',label:'KAKQ'},{value:'KAMA',label:'KAMA'},{value:'KAMX',label:'KAMX'},{value:'KAPD',label:'KAPD'},{value:'KAPX',label:'KAPX'},{value:'KARX',label:'KARX'},{value:'KATX',label:'KATX'},{value:'KBBX',label:'KBBX'},{value:'KBGM',label:'KBGM'},{value:'KBHX',label:'KBHX'},{value:'KBIS',label:'KBIS'},{value:'KBLX',label:'KBLX'},{value:'KBMX',label:'KBMX'},{value:'KBOX',label:'KBOX'},{value:'KBRO',label:'KBRO'},{value:'KBUF',label:'KBUF'},{value:'KBYX',label:'KBYX'},{value:'KCAE',label:'KCAE'},{value:'KCBW',label:'KCBW'},{value:'KCBX',label:'KCBX'},{value:'KCCX',label:'KCCX'},{value:'KCLE',label:'KCLE'},{value:'KCLX',label:'KCLX'},{value:'KCRI',label:'KCRI'},{value:'KCRP',label:'KCRP'},{value:'KCXX',label:'KCXX'},{value:'KCYS',label:'KCYS'},{value:'KDAX',label:'KDAX'},{value:'KDDC',label:'KDDC'},{value:'KDFX',label:'KDFX'},{value:'KDGX',label:'KDGX'},{value:'KDIX',label:'KDIX'},{value:'KDLH',label:'KDLH'},{value:'KDMX',label:'KDMX'},{value:'KDOX',label:'KDOX'},{value:'KDTX',label:'KDTX'},{value:'KDVN',label:'KDVN'},{value:'KDYX',label:'KDYX'},{value:'KEAX',label:'KEAX'},{value:'KEMX',label:'KEMX'},{value:'KENX',label:'KENX'},{value:'KEOX',label:'KEOX'},{value:'KEPZ',label:'KEPZ'},{value:'KESX',label:'KESX'},{value:'KEVX',label:'KEVX'},{value:'KEWX',label:'KEWX'},{value:'KEYX',label:'KEYX'},{value:'KFCX',label:'KFCX'},{value:'KFDR',label:'KFDR'},{value:'KFDX',label:'KFDX'},{value:'KFFC',label:'KFFC'},{value:'KFSD',label:'KFSD'},{value:'KFSX',label:'KFSX'},{value:'KFTG',label:'KFTG'},{value:'KFWS',label:'KFWS'},{value:'KGGW',label:'KGGW'},{value:'KGJX',label:'KGJX'},{value:'KGLD',label:'KGLD'},{value:'KGRB',label:'KGRB'},{value:'KGRK',label:'KGRK'},{value:'KGRR',label:'KGRR'},{value:'KGSP',label:'KGSP'},{value:'KGUA',label:'KGUA'},{value:'KGWX',label:'KGWX'},{value:'KGYX',label:'KGYX'},{value:'KHDX',label:'KHDX'},{value:'KHGX',label:'KHGX'},{value:'KHKI',label:'KHKI'},{value:'KHKM',label:'KHKM'},{value:'KHMO',label:'KHMO'},{value:'KHNX',label:'KHNX'},{value:'KHPX',label:'KHPX'},{value:'KHTX',label:'KHTX'},{value:'KHWA',label:'KHWA'},{value:'KICT',label:'KICT'},{value:'KICX',label:'KICX'},{value:'KILN',label:'KILN'},{value:'KILX',label:'KILX'},{value:'KIND',label:'KIND'},{value:'KINX',label:'KINX'},{value:'KIWA',label:'KIWA'},{value:'KIWX',label:'KIWX'},{value:'KJAN',label:'KJAN'},{value:'KJAX',label:'KJAX'},{value:'KJGX',label:'KJGX'},{value:'KJKL',label:'KJKL'},{value:'KJUA',label:'KJUA'},{value:'KLBB',label:'KLBB'},{value:'KLCH',label:'KLCH'},{value:'KLIX',label:'KLIX'},{value:'KLNX',label:'KLNX'},{value:'KLOT',label:'KLOT'},{value:'KLRX',label:'KLRX'},{value:'KLSX',label:'KLSX'},{value:'KLTX',label:'KLTX'},{value:'KLVX',label:'KLVX'},{value:'KLWX',label:'KLWX'},{value:'KLZK',label:'KLZK'},{value:'KMAF',label:'KMAF'},{value:'KMAX',label:'KMAX'},{value:'KMBX',label:'KMBX'},{value:'KMHX',label:'KMHX'},{value:'KMKX',label:'KMKX'},{value:'KMLB',label:'KMLB'},{value:'KMOB',label:'KMOB'},{value:'KMPX',label:'KMPX'},{value:'KMQT',label:'KMQT'},{value:'KMRX',label:'KMRX'},{value:'KMSX',label:'KMSX'},{value:'KMTX',label:'KMTX'},{value:'KMUX',label:'KMUX'},{value:'KMVX',label:'KMVX'},{value:'KMXX',label:'KMXX'},{value:'KNKX',label:'KNKX'},{value:'KNQA',label:'KNQA'},{value:'KOAX',label:'KOAX'},{value:'KOHX',label:'KOHX'},{value:'KOKX',label:'KOKX'},{value:'KOTX',label:'KOTX'},{value:'KPAH',label:'KPAH'},{value:'KPBZ',label:'KPBZ'},{value:'KPDT',label:'KPDT'},{value:'KPOE',label:'KPOE'},{value:'KPUX',label:'KPUX'},{value:'KRAX',label:'KRAX'},{value:'KRGX',label:'KRGX'},{value:'KRIW',label:'KRIW'},{value:'KRLX',label:'KRLX'},{value:'KRTX',label:'KRTX'},{value:'KSFX',label:'KSFX'},{value:'KSGF',label:'KSGF'},{value:'KSHV',label:'KSHV'},{value:'KSJT',label:'KSJT'},{value:'KSOX',label:'KSOX'},{value:'KSRX',label:'KSRX'},{value:'KTBW',label:'KTBW'},{value:'KTFX',label:'KTFX'},{value:'KTLH',label:'KTLH'},{value:'KTLX',label:'KTLX'},{value:'KTWX',label:'KTWX'},{value:'KTYX',label:'KTYX'},{value:'KUDX',label:'KUDX'},{value:'KUEX',label:'KUEX'},{value:'KVAX',label:'KVAX'},{value:'KVBX',label:'KVBX'},{value:'KVNX',label:'KVNX'},{value:'KVTX',label:'KVTX'},{value:'KVWX',label:'KVWX'},{value:'KYUX',label:'KYUX'},{value:'NOP3',label:'NOP3'},{value:'TJUA',label:'TJUA'}]

  const API = "http://localhost:8008"
  const API2 = "http://localhost:8888"

  require('dotenv').config()
  const api = process.env.REACT_APP_API;
  console.log(api)
  
  async function getRadarPlotImage(){
    console.log("Start Date: " + startDate);
    console.log("End Date: " + endDate);
    console.log("Location: " + location);
    
    console.log("Generating Radar Plot")
    setIsButtonClicked(true);

    setIsProgressBarVisible(true);
    
    let timer = null;
    timer = setInterval(() => {
        setValue((value) => value + 5);
      }, 400);
    if (value >= 100){
      clearInterval(timer);
    }

    const response = await fetch(api + `/plot/v1?start_date=`+startDate+`&station=`+location+`&end_date=`+endDate+`&userId=`+state.userId+`&tokenId=`+state.emailId, 
    {method: "GET", headers: { 'Content-Type': 'application/json' }});
    console.log(response);
    
    const json = await response.json();
    console.log(json);
    if (json == 'No scans available for the selected inputs'){
      setIsImageGenerated(false);
      navigate(`/dashboard/data/graph`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId, 'loginType':state.loginType, 'startDate':startDate, 'endDate': endDate, 'location': location, 'image_url': imageURL}});
    }
    else{
      setIsImageGenerated(true);
      navigate(`/dashboard/data/graph`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId, 'loginType':state.loginType, 'startDate':startDate, 'endDate': endDate, 'location': location, 'image_url': json.image_url}});
      setImageURL(json.image_url);
    }
    console.log(imageURL);
    var searchType = "Radar Plot";
    var searchParam = "location:"+location;

    var searchOutput = "Plot url:"+imageURL;
    //updateSearchHistory(searchType,searchParam,searchOutput);
  }; 

  async function getMeeraDataPlot(){
    console.log("Start Date: " + startDate);
    console.log("End Date: " + endDate);
    console.log("Location: " + location);
    
    console.log("Generating Meera Plot")
    setIsButtonClicked(true);

    setIsProgressBarVisible(true);
    
    let timer = null;
    timer = setInterval(() => {
        setValue((value) => value + 5);
      }, 400);
    if (value >= 100){
      clearInterval(timer);
    }

    const response = await fetch(api + `/plot/v2?start_date=`+startDate+`&station=`+location+`&end_date=`+endDate+`&userId=`+state.userId+`&tokenId=`+state.emailId, 
    {method: "GET", headers: { 'Content-Type': 'application/json' }});
    console.log(response);
    
    const json = await response.json();
    console.log(json);
    if (json == 'No scans available for the selected inputs'){
      setIsImageGenerated(false);
      navigate(`/dashboard/data/graph`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId, 'loginType':state.loginType, 'startDate':startDate, 'endDate': endDate, 'location': location, 'image_url': imageURL}});
    }
    else{
      setIsImageGenerated(true);
      navigate(`/dashboard/data/graph`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId, 'loginType':state.loginType, 'startDate':startDate, 'endDate': endDate, 'location': location, 'image_url': json.image_url}});
      setImageURL(json.image_url);
    }
    console.log(imageURL);
    var searchType = "Meera Data Plot";
    var searchParam = "location:"+location;

    var searchOutput = "Plot url:"+imageURL;
    //updateSearchHistory(searchType,searchParam,searchOutput);
  }; 

  // const interval = setInterval(() => {
  //   setValue(oldValue => {
  //     const newValue = oldValue + 10;

  //     if (newValue === 100) {
  //       clearInterval(interval);
  //     }

  //     return newValue;
  //   });
  // }, 1000);

  // useEffect(() => {
  //   let timer = null;
  //   if(setIsProgressBarVisible){
  //     timer = setInterval(() => {
  //       setValue((value) => value + 1);
  //     }, 100);

  //     if (value === 100){
  //       clearInterval(timer);
  //     }
  //   }
  //   return () => {
  //     clearInterval(timer);
  //   };
  // });

  async function updateSearchHistory(searchType,searchParam,searchOutput){
    const body_activity = {
      "userId": state.userId,
      "tokenId" : state.emailId,
      "typeOfSearch" : searchType,
      "searchParam" : searchParam,
      "searchOutput" : searchOutput
    }
    console.log(body_activity);
    console.log("Saving Search History");
    const response = await fetch(api + `/user/activity`, 
    {method: "POST" , 
    headers: {
      'Access-Control-Allow-Origin':'true',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    }	,
    body: JSON.stringify(body_activity)});

    console.log(response);
    const json = await response.json();
    console.log(json);
  }

  const onClick_back = () => {
    console.log('Main Dashboard Page');
    navigate(`/dashboard`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId, 'loginType':state.loginType}});
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  const [value, setValue] = useState(0);

  return (
    <div class = 'service-container'>
      <Header name={state.name} loginType= {state.loginType}/>
      <div class = 'service-page-header'>
        <div class = 'back-btn-div'>
          <button class ='back-btn' onClick={onClick_back}>
            <img src = {backButton} class ='back-btn-img'></img>
          </button>
        </div>
        <h4>Radar Data Visualization and Weather Forecasting</h4>
      </div> 
      
      <div class = "input-container">
        <div class = 'input-item'>
          <p>Select Start Date and Time:</p>
          <div class = 'date-time'>
            <TextField
              id="start_date"
              type="datetime-local"
              defaultValue="2019-06-29T19:20"
              onChange={(newValue) => {
                setStartDate(newValue.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div class = 'input-item'>
          <p>Select End Date and Time:</p>
          <div class = 'date-time'>
            <TextField
              id="end_date"
              type="datetime-local"
              defaultValue="2019-07-27T20:21"
              onChange={(newValue) => {
                setEndDate(newValue.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div class = 'input-item'>
          <p>Select Location:</p>
          <div class = 'location'>
            <select class = 'location-selector' defaultValue={"KCLE"} onChange={(event) => handleLocationChange(event)}>
              {location_options.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
              ))}
            </select>
            {/* <Select class="location-selector" 
            defaultValue={location_options[0]} 
            name="location" 
            id = "location" 
            onChange={(val) => handlePeriodChange(val)}
            options={location_options}/> */}
          </div>
        </div>
        <button class = 'submit-btn' onClick={getRadarPlotImage}>
          <span>Generate Radar Graph</span>
        </button>
        <button class = 'submit-btn' onClick={getMeeraDataPlot}>
          <span>Generate Meera Plot</span>
        </button>
        <div>
          {
            isProgressBarVisible == true &&
            <ProgressBar color={"#ff7979"} width={"150px"} value={value} max={100} />
          }
        </div>
        
        </div>
      
      {/* {
        isButtonClicked == true &&
        <div class = 'result'>
          {isImageGenerated == false &&
            <p>
              Your graph is being generated. Please wait!
            </p>
          }
          {isImageGenerated == true &&
            <p>
              Your graph has been generated. <a href={imageURL}>Click Here</a> to go view the plot.
            </p>
          }
        </div>
      }
      {
        isImageGenerated == true && isForecast == false &&
        <div class = 'weather-forecast-que'>
          <p> Do you wish to forecast weather conditions?</p>
          <button class = 'weather-forecast-btn' onClick={generateWeatherForecast}>Forecast Weather</button>
        </div>
      }
      {
        isForecast == true &&
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
      } */}
    </div>
  );
}
export default DataRetrieval;
