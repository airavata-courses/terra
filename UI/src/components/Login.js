import React,{Component, useState} from 'react';
import './CSS/Intro.css';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import { useNavigate, useHistory } from "react-router-dom";
import { render } from '@testing-library/react';

const clientId =
  '569132373426-k5fbiibcgfm0ejj0lqv3esftucdanbco.apps.googleusercontent.com';

function Login() {

  const navigate = useNavigate();

  const [emailId, setEmailId] = useState('');
  const [name, setName] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('asdfghjkl');
  const [loginType, setLoginType] = useState('');
  
  const API = "http://localhost:8008";
  const API2 = "http://localhost:8888";

  require('dotenv').config()
  const api = process.env.REACT_APP_API;
  console.log(api)

  async function loginUserId(res){
    console.log("Logging using Google SSO");
    
    const body_activity = {
      "emailId" : res.profileObj.email,
      "password": password
    }
    console.log(body_activity);
    
    setLoginType('Google');

    const response = await fetch(api + `/user/authentication`, 
    {method: "POST" , 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body_activity)});
    
    console.log(response);
    const json = await response.json();
    console.log(json);
    if(json.response == "Correct password!" || json.response == "User Exists with same emailId"){
      navigate(`/dashboard`, {state: {userId: json.userId, emailId: res.profileObj.email , name :  res.profileObj.email, loginType: 'Google'}});
    }
    else{
      console.log(json.response);
      registerUserId(res)
    }
  }

  async function registerUserId(res){
    const body_activity = {
      "userName": res.profileObj.email,
      "emailId" : res.profileObj.email,
      "password": "asdfghjkl"
    }
    console.log(body_activity);

    setLoginType('Google')

    console.log("Registering user Id for Google Account");
    
    const response = await fetch(api + `/user/register`, 
    {method: "POST" , 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body_activity)});
    
    console.log(response);
    const json = await response.json();
    console.log(json);
    if(json.response == null){
      navigate(`/dashboard`, {state: {userId: json.userId, emailId: emailId , name : emailId, loginType: 'Google'}});
    }
    else{
      alert(json.response)
    }
  }

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully! Welcome ${res.profileObj.name}`
    // );
    refreshTokenSetup(res);
    loginUserId(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. Please try again!`
    );
  };
  
  return (
    <div class = 'google-login-btn'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google"
        onSuccess={loginUserId}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
