import React from 'react';

import './CSS/Intro.css';

import Login from './Login';
import Logout from './Logout';

function Intro (){
  return (
    <div class="container">
      <div class="header">
      <h1> Welcome to Team Terra </h1>
        <h2> Project 1 </h2>
        <br/>
        <p> Please sign in below to go to the main dashboard </p>
        <br/>
        <Login />
      </div>
    </div>
  );
}
export default Intro;
