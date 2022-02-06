import React from 'react';
import './CSS/Dashboard.css';
import Header from './Header';
import SideNav from './SideNav';

import { useLocation } from "react-router-dom";

function Dashboard (){

  return (
    <div class ='container'>
        <Header />
        <SideNav />
    </div>
  );
}

export default Dashboard;
