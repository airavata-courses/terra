import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate, useLocation } from "react-router-dom";

import './CSS/Intro.css';

const clientId =
  '569132373426-k5fbiibcgfm0ejj0lqv3esftucdanbco.apps.googleusercontent.com';

function Logout(props) {
  const navigate = useNavigate();

  const loginType = props.loginType;

  const onSuccess = () => {
    console.log('Logout made successfully');
    // alert('Logged out successfully ✌');
    navigate(`/`);
  };

  return (
    <div>
    {
      loginType == "Google" &&
      <div class = 'google-logout-btn'>
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        ></GoogleLogout>
      </div>
    }
    {
      loginType == "Non-Google" &&
      <div class = 'logout-btn-container'>
        <button class = 'logout-btn' onClick={onSuccess}>Logout</button>
      </div>
    }
    </div>
  );
}

export default Logout;
