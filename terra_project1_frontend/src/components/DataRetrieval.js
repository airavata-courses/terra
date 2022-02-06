import React,{useState, Fragment} from 'react';
import './CSS/Dashboard.css';

import Header from './Header';
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";

import backButton from "./Assets/backButton.png"

import { useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';
import TextField from '@material-ui/core/TextField';


function DataRetrieval (){

  const navigate = useNavigate();
  
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState(new Date());
  const [endDate, setEndDate] = useState("");

  const [imageURL, setImageURL] = useState("");

  const location_options = [{value:'KABC',label:'KABC'},{value:'KABR',label:'KABR'},{value:'KABX',label:'KABX'},{value:'KACG',label:'KACG'},{value:'KAEC',label:'KAEC'},{value:'KAHG',label:'KAHG'},{value:'KAIH',label:'KAIH'},{value:'KAKC',label:'KAKC'},{value:'KAKQ',label:'KAKQ'},{value:'KAMA',label:'KAMA'},{value:'KAMX',label:'KAMX'},{value:'KAPD',label:'KAPD'},{value:'KAPX',label:'KAPX'},{value:'KARX',label:'KARX'},{value:'KATX',label:'KATX'},{value:'KBBX',label:'KBBX'},{value:'KBGM',label:'KBGM'},{value:'KBHX',label:'KBHX'},{value:'KBIS',label:'KBIS'},{value:'KBLX',label:'KBLX'},{value:'KBMX',label:'KBMX'},{value:'KBOX',label:'KBOX'},{value:'KBRO',label:'KBRO'},{value:'KBUF',label:'KBUF'},{value:'KBYX',label:'KBYX'},{value:'KCAE',label:'KCAE'},{value:'KCBW',label:'KCBW'},{value:'KCBX',label:'KCBX'},{value:'KCCX',label:'KCCX'},{value:'KCLE',label:'KCLE'},{value:'KCLX',label:'KCLX'},{value:'KCRI',label:'KCRI'},{value:'KCRP',label:'KCRP'},{value:'KCXX',label:'KCXX'},{value:'KCYS',label:'KCYS'},{value:'KDAX',label:'KDAX'},{value:'KDDC',label:'KDDC'},{value:'KDFX',label:'KDFX'},{value:'KDGX',label:'KDGX'},{value:'KDIX',label:'KDIX'},{value:'KDLH',label:'KDLH'},{value:'KDMX',label:'KDMX'},{value:'KDOX',label:'KDOX'},{value:'KDTX',label:'KDTX'},{value:'KDVN',label:'KDVN'},{value:'KDYX',label:'KDYX'},{value:'KEAX',label:'KEAX'},{value:'KEMX',label:'KEMX'},{value:'KENX',label:'KENX'},{value:'KEOX',label:'KEOX'},{value:'KEPZ',label:'KEPZ'},{value:'KESX',label:'KESX'},{value:'KEVX',label:'KEVX'},{value:'KEWX',label:'KEWX'},{value:'KEYX',label:'KEYX'},{value:'KFCX',label:'KFCX'},{value:'KFDR',label:'KFDR'},{value:'KFDX',label:'KFDX'},{value:'KFFC',label:'KFFC'},{value:'KFSD',label:'KFSD'},{value:'KFSX',label:'KFSX'},{value:'KFTG',label:'KFTG'},{value:'KFWS',label:'KFWS'},{value:'KGGW',label:'KGGW'},{value:'KGJX',label:'KGJX'},{value:'KGLD',label:'KGLD'},{value:'KGRB',label:'KGRB'},{value:'KGRK',label:'KGRK'},{value:'KGRR',label:'KGRR'},{value:'KGSP',label:'KGSP'},{value:'KGUA',label:'KGUA'},{value:'KGWX',label:'KGWX'},{value:'KGYX',label:'KGYX'},{value:'KHDX',label:'KHDX'},{value:'KHGX',label:'KHGX'},{value:'KHKI',label:'KHKI'},{value:'KHKM',label:'KHKM'},{value:'KHMO',label:'KHMO'},{value:'KHNX',label:'KHNX'},{value:'KHPX',label:'KHPX'},{value:'KHTX',label:'KHTX'},{value:'KHWA',label:'KHWA'},{value:'KICT',label:'KICT'},{value:'KICX',label:'KICX'},{value:'KILN',label:'KILN'},{value:'KILX',label:'KILX'},{value:'KIND',label:'KIND'},{value:'KINX',label:'KINX'},{value:'KIWA',label:'KIWA'},{value:'KIWX',label:'KIWX'},{value:'KJAN',label:'KJAN'},{value:'KJAX',label:'KJAX'},{value:'KJGX',label:'KJGX'},{value:'KJKL',label:'KJKL'},{value:'KJUA',label:'KJUA'},{value:'KLBB',label:'KLBB'},{value:'KLCH',label:'KLCH'},{value:'KLIX',label:'KLIX'},{value:'KLNX',label:'KLNX'},{value:'KLOT',label:'KLOT'},{value:'KLRX',label:'KLRX'},{value:'KLSX',label:'KLSX'},{value:'KLTX',label:'KLTX'},{value:'KLVX',label:'KLVX'},{value:'KLWX',label:'KLWX'},{value:'KLZK',label:'KLZK'},{value:'KMAF',label:'KMAF'},{value:'KMAX',label:'KMAX'},{value:'KMBX',label:'KMBX'},{value:'KMHX',label:'KMHX'},{value:'KMKX',label:'KMKX'},{value:'KMLB',label:'KMLB'},{value:'KMOB',label:'KMOB'},{value:'KMPX',label:'KMPX'},{value:'KMQT',label:'KMQT'},{value:'KMRX',label:'KMRX'},{value:'KMSX',label:'KMSX'},{value:'KMTX',label:'KMTX'},{value:'KMUX',label:'KMUX'},{value:'KMVX',label:'KMVX'},{value:'KMXX',label:'KMXX'},{value:'KNKX',label:'KNKX'},{value:'KNQA',label:'KNQA'},{value:'KOAX',label:'KOAX'},{value:'KOHX',label:'KOHX'},{value:'KOKX',label:'KOKX'},{value:'KOTX',label:'KOTX'},{value:'KPAH',label:'KPAH'},{value:'KPBZ',label:'KPBZ'},{value:'KPDT',label:'KPDT'},{value:'KPOE',label:'KPOE'},{value:'KPUX',label:'KPUX'},{value:'KRAX',label:'KRAX'},{value:'KRGX',label:'KRGX'},{value:'KRIW',label:'KRIW'},{value:'KRLX',label:'KRLX'},{value:'KRTX',label:'KRTX'},{value:'KSFX',label:'KSFX'},{value:'KSGF',label:'KSGF'},{value:'KSHV',label:'KSHV'},{value:'KSJT',label:'KSJT'},{value:'KSOX',label:'KSOX'},{value:'KSRX',label:'KSRX'},{value:'KTBW',label:'KTBW'},{value:'KTFX',label:'KTFX'},{value:'KTLH',label:'KTLH'},{value:'KTLX',label:'KTLX'},{value:'KTWX',label:'KTWX'},{value:'KTYX',label:'KTYX'},{value:'KUDX',label:'KUDX'},{value:'KUEX',label:'KUEX'},{value:'KVAX',label:'KVAX'},{value:'KVBX',label:'KVBX'},{value:'KVNX',label:'KVNX'},{value:'KVTX',label:'KVTX'},{value:'KVWX',label:'KVWX'},{value:'KYUX',label:'KYUX'},{value:'NOP3',label:'NOP3'},{value:'TJUA',label:'TJUA'}]

  const API = "http://localhost:8008"
   
  function handleSubmit () {
    console.log("Start Date: " + this.state.startDate);
    console.log("End Date: " + this.state.endDate);
    console.log("Location: " + this.state.location);
  };

  async function getImageUrl(){
    console.log("Looking up results")
    const response = await fetch(API + `/plot?start_date=2019-06-29T19:20&station=KCLE&end_date=2019-07-27T20:21`, {method: "GET"});
    console.log(response);
    const json = await response.json();
    console.log(json);
    setImageURL(json.image_url);
  };


  const onClick_back = () => {
    console.log('Main Dashboard Page');
    navigate(`/dashboard`);
  };

  

  return (
    <div class = 'service-container'>
      <Header />
      
      <div class = 'service-page-header'>
        <div class = 'back-btn-div'>
          <button class ='back-btn' onClick={onClick_back}>
            <img src = {backButton} class ='back-btn-img'></img>
          </button>
        </div>
        <h4>Data Retrieval and Visualization</h4>
      </div> 
      
      <div class = "input-container">
        <div class = 'input-item'>
          <p>Select Start Date and Time:</p>
          <div class = 'date-time'>
            <TextField
              id="start_date"
              type="date"
              defaultValue="2022-02-05"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id ="start_time"
              defaultValue="06:20"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              // 5 minutes
              inputProps={{
                step: 300,
              }}
            />
          </div>
        </div>
        <div class = 'input-item'>
          <p>Select End Date and Time:</p>
          <div class = 'date-time'>
            <TextField
              id="end_date"
              type="date"
              defaultValue="2022-02-06"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              if = "end_time"
              defaultValue="04:20"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              // 5 minutes
              inputProps={{
                step: 300,
              }}
            />
          </div>
        </div>
        <div class = 'input-item'>
          <p>Select Location:</p>
          <div class = 'location'>
            <Select class="location-selector" defaultValue={location_options[0]} name="location" id = "location" options={location_options}/>
          </div>
        </div>
        <button class = 'submit-btn' onClick={getImageUrl}>
          Submit
        </button>
      </div>
      <div class = 'result'>
        <p class = 'result-url'>{imageURL}</p>
      </div>
    </div>
  );
}
export default DataRetrieval;
