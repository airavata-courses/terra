import React, { useState } from 'react';
import './CSS/Intro.css';
import Header from './Header';
import SideNav from './SideNav';
import Login from './Login';

import { useLocation, useNavigate } from "react-router-dom";

function LoginMain (){
  
  const navigate = useNavigate();

  const API = "http://localhost:8008";
  const API2 = "http://localhost:8888";

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState('');
  
  async function loginUser(){
    const body_activity = {
      "emailId" : emailId,
      "password": password
    }
    console.log(body_activity);
    console.log("Logging in user");
    
    setLoginType('Non-Google');

    const response = await fetch(API + `/user/authentication`, 
    {method: "POST" , 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body_activity)});
    
    console.log(response);
    const json = await response.json();
    console.log(json);
    if(json.response == "Correct password!"){
      navigate(`/dashboard`, {state: {userId: json.userId, emailId: emailId , name : emailId, loginType: 'Non-Google'}});
    }
    else{
      alert(json.response)
    }
    //navigate(`/dashboard`, {state: {userId: json.userId, emailId: emailId , name : emailId}});
    
  }

  const navigateRegisterPage = () => {
    console.log('Register Page');
    navigate(`/register`);
  };

  const updatePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }

  const updateEmailId = (event) => {
    event.preventDefault();
    setEmailId(event.target.value);
  }

  return (
    <div class="login-container">
      <p class="sign" align="center">Sign in</p>
      <form class="form1">
        <input class="email" type="text" placeholder="Email" onChange={(event) => updateEmailId(event)}/>
        <input class="pass" type="password" placeholder="Password" onChange={(event) => updatePassword(event)}/>
      </form>
      <div class = 'btn-div'>
          <button class="login-btn" onClick={loginUser}>Sign in</button>
      </div>
      <div class = 'btn-div'>
        <p>Or</p>
        <button class="register-btn" onClick={navigateRegisterPage}>Click here to Register</button>
      </div>
      <div class = 'google-login-div'>
        <p>Or</p>
        <Login />  
      </div>
    </div>
  );
}

export default LoginMain;
