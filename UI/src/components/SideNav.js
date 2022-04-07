import React from "react";
import { useNavigate } from "react-router-dom";

function SideNav (props){

  const navigate = useNavigate();

  const userId = props.userId;
  const emailId = props.emailId;
  const name = props.name;
  const loginType = props.loginType;

  const onClick_DataRetrieval = () => {
    console.log('Data Retrieval Page');
    navigate(`/dashboard/data`, {state: {'name': name,'userId':userId, 'emailId':emailId, 'loginType':loginType}});
  };

  const onClick_WeatherForecasting = () => {
    console.log('Weather Forecasting Page');
    navigate(`/dashboard/weather`, {state: {'name': name, 'userId':userId, 'emailId':emailId, 'loginType':loginType}});
  };

  const onClick_UserHistory = () => {
    console.log('User History Page');
    navigate(`/dashboard/history`, {state: {'name': name, 'userId':userId, 'emailId':emailId, 'loginType':loginType}});
  };

  return (
    <header>
      <div class ='sidenav'>
        <div class = 'menu-item'>
          <button class = 'menu-button' onClick={onClick_DataRetrieval}>
            Radar Data Visualization and Weather Forecasting
          </button>
        </div>
        {/* <div class = 'menu-item'>
          <button class = 'menu-button' onClick={onClick_WeatherForecasting}>
            Weather Forecasting
          </button>
        </div> */}
        <div class = 'menu-item'>
          <button class = 'menu-button' onClick={onClick_UserHistory}>
            User History
          </button>
        </div>
      </div>
      </header>
  );
}
export default SideNav;