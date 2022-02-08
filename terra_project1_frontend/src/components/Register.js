import React, { useState } from 'react';
import './CSS/Intro.css';
import Header from './Header';
import SideNav from './SideNav';

import { useNavigate, useLocation } from "react-router-dom";
import Login from './Login';

function Register (){

  const navigate = useNavigate();

  const API = "http://localhost:8008";
  const API2 = "http://localhost:8888";

  const [userName, setUserName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const navigateIntroPage = () => {
    console.log('Intro Page');
    navigate(`/`);
  };

  async function registerUserId(){
    const body_activity = {
      "userName": userName,
      "emailId" : emailId,
      "password": password
    }
    console.log(body_activity);
    console.log("Registering user Id for Normal Account");
    
    const response = await fetch(API + `/user/register`, 
    {method: "POST" , 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body_activity)});
    
    console.log(response);
    const json = await response.json();
    console.log(json);
    if(json.response == null){
      navigate(`/`);
    }
    else{
      alert(json.response)
    }
  }

  const showInfo = () => {
    console.log(emailId);
    console.log(password);
    console.log(userName);
  };

  return (
    <div class="register-container">
      <p class="sign" align="center">Register</p>
      <form class="form1">
        <input class="email " type="text" placeholder="Email" onChange={(event) => setEmailId(event.target.value)} />
        <input class="un " type="text" placeholder="Username" onChange={(event) => setUserName(event.target.value)} />
        <input class="pass" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
      </form>
      <div class = 'btn-div'>
          <button class="sign-in-btn" onClick={registerUserId}>Register</button>
          <button class="register-btn" onClick={navigateIntroPage}>Login</button>
      </div>
      <div class = 'google-login-div'>
        <p>Or</p>
        <Login />
      </div>
    </div>
  );
}

export default Register;
