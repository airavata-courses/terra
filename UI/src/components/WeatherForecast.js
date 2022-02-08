import React from 'react';
import './CSS/Dashboard.css';
import Header from './Header';

import SideNav from './SideNav';

function WeatherForecast (){
  return (
    <header>
      <div className='header'>
            <Header />
        </div>
      <div className = "main-container">
            <h4></h4>   
        </div>
      </header>
  );
}
export default WeatherForecast;
