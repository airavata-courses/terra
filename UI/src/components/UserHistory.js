import React,{useState, Fragment} from 'react';
import './CSS/Dashboard.css';

import Header from './Header';
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";

import backButton from "./Assets/backButton.png"

import { useLocation, useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';
import TextField from '@material-ui/core/TextField';

function UserHistory (){

  const navigate = useNavigate();
  const {state} = useLocation();
  const [userHistory, setUserHistory] = useState("");

  const API = "http://localhost:8008";

  const [isHistoryNull, setIsHistoryNull] = useState(true);

  async function getUserHistory(){
    console.log("Getting User History")
    const response = await fetch(API + `/user/activity?userId=`+state.userId, {method: "GET"});
    console.log(response);
    const json = await response.json();
    console.log(json);
    setUserHistory(json);
    setIsHistoryNull(false);
  }

  function renderTableRows() {
    console.log(userHistory);

    if(isHistoryNull == true){
      return null
    }

    let result = [];
    var array = [userHistory.typeOfSearch, userHistory.searchParam, userHistory.searchOutput];
    console.log(array);

    for(var i = 0; i < array[0].length; i++) 
    {
      result.push(
        <tr>
          <td>{array[0][i]}</td>
          <td>{array[1][i]}</td>
          <td>{array[2][i]}</td>
        </tr>
      )
    }
    return result;
    
    }
    
  const onClick_back = () => {
    console.log('Main Dashboard Page');
    navigate(`/dashboard`, {state: {'name': state.name,'userId':state.userId, 'emailId':state.emailId}});
  };
  
  return (
    <div class = 'service-container'>
      <Header name={state.name}/>
      <div class = 'service-page-header'>
        <div class = 'back-btn-div'>
          <button class ='back-btn' onClick={onClick_back}>
            <img src = {backButton} class ='back-btn-img'></img>
          </button>
        </div>
        <h4>User Search History</h4>
        <div class = 'refresh-btn-div'>
          <button class = 'refresh-btn' onClick={getUserHistory}><span>Refresh Search History</span></button>
        </div>
      </div>
      <div class ='user-history-body'>
        <table>
          <tr>
            <th>Type of Search</th>
            <th>Search Parameters</th>
            <th>Search Output</th>
          </tr>
          {renderTableRows()}
        </table>
      </div>
      


    </div> 
  );
}
export default UserHistory;
