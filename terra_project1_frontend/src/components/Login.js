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
  
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully! Welcome ${res.profileObj.name}`
    // );
    refreshTokenSetup(res);

    sessionStorage.setItem("access_token", res.accessToken);
    sessionStorage.setItem("name", res.profileObj.name);
    sessionStorage.setItem("emailId", res.profileObj.email);

    navigate(`/dashboard`, {state: {emailId: res.profileObj.email , name : res.profileObj.name, accessToken: res.access_token}});
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
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
