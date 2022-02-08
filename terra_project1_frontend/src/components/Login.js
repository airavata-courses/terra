import React,{Component, useState} from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import { useNavigate, useHistory } from "react-router-dom";
import { render } from '@testing-library/react';

const clientId =
  '569132373426-7489nb9994vo9hpirmvff5e6vhh447d6.apps.googleusercontent.com';

function Login() {

  const navigate = useNavigate();

  const [emailId, setEmailId] = useState('');
  const [name, setName] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [userId, setUserId] = useState('');
  
  const API = "http://localhost:8008";
  const API2 = "http://localhost:8888";

  async function registerUserId(res){
    const body_activity = {
      "userName": res.profileObj.email,
      "emailId" : res.profileObj.email,
      "password": "asdfghjkl"

    }
    console.log(body_activity);
    console.log("Registering user Id for Google Account");
    
    const response = await fetch(API + `/user/register`, 
    {method: "POST" , 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body_activity)});
    
    console.log(response);
    const json = await response.json();
    console.log(json);
    if(json.response == null){
      navigate('/')
      //navigate(`/dashboard`, {state: {userId: json.userId, emailId: res.profileObj.email , name : res.profileObj.name}});
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
    registerUserId(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. Please try again!`
    );
  };
  
  return (
    <div class = 'login-btn'>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={registerUserId}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
