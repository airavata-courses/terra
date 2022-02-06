import React from "react";
import { useNavigate } from "react-router-dom";

function SideNav (){

  const navigate = useNavigate();

  const onClick_DataRetrieval = () => {
    console.log('Data Retrieval Page');
    navigate(`/dashboard/data`);
  };

  const onClick_WeatherForecasting = () => {
    console.log('Weather Forecasting Page');
    navigate(`/dashboard/weather`);
  };

  const onClick_UserHistory = () => {
    console.log('User History Page');
    navigate(`/dashboard/history`);
  };

  return (
    <header>
      <div class ='sidenav'>
        <div class = 'menu-item'>
          <button class = 'menu-button' onClick={onClick_DataRetrieval}>
            Data Retrieval and Visualization
          </button>
        </div>
        <div class = 'menu-item'>
          <button class = 'menu-button' onClick={onClick_WeatherForecasting}>
            Weather Forecasting
          </button>
        </div>
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