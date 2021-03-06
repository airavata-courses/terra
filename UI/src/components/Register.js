import React, { useState } from 'react';
import './CSS/Intro.css';
import Header from './Header';
import SideNav from './SideNav';

import { useNavigate, useLocation } from "react-router-dom";
import Login from './Login';
import axios from "axios";

function Register (){

  const navigate = useNavigate();

  const API = "http://localhost:8008";
  const API2 = "http://localhost:8888";

  require('dotenv').config()
  const api = process.env.REACT_APP_API;
  console.log(api)

  const [userName, setUserName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState('');

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
    
    setLoginType('Non-Google');

    const jsonobj = JSON.stringify(body_activity);

    axios
    .post(api+ `/user/register`, jsonobj)
    .then(res => {
        if (res.response == null){
          navigate(`/`);
          console.log("Registered Sucessfully!")
        }
        else{
          alert(res.response)
        }
      })
    // const response = await fetch(API + `/user/register`, 
    // {method: "POST" , 
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(body_activity)});
    
    // console.log(response);
    // const json = await response.json();
    // console.log(json);
    // if(json.response == null){
    //   navigate(`/`);
    // }
    // else{
    //   alert(json.response)
    // }
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
          <button class="register-btn" onClick={registerUserId}>Register</button>
      </div>
      <div class = 'btn-div'>
        <p>Or</p>
        <button class="login-btn" onClick={navigateIntroPage}>Go back to login page</button>
      </div>
    </div>
  );
}

export default Register;
