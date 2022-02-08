import React, { useState } from 'react';
import './CSS/Dashboard.css';
import Header from './Header';
import SideNav from './SideNav';

import { useLocation } from "react-router-dom";

function Dashboard (){
  
  const {state} = useLocation();

  return (
    <div class ='container'>
        <Header name={state.name} />
        <SideNav name={state.name} emailId={state.emailId} userId={state.userId} />
    </div>
  );
}

export default Dashboard;
