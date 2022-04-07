import React from 'react';

import './CSS/Intro.css';

import LoginMain from './LoginMain';
import Login from './Login';

function Intro (){
  return (
    <div class="intro-container">
      <div class="header">
        <h1> Welcome to Team Terra </h1>
          <h2> NASA Data Anlysis Portal </h2>
      </div>
      <LoginMain />
    </div>
  );
}
export default Intro;
