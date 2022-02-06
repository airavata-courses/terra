import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";

const clientId =
  '569132373426-7489nb9994vo9hpirmvff5e6vhh447d6.apps.googleusercontent.com';

function Logout() {
  
  const navigate = useNavigate();

  const onSuccess = () => {
    console.log('Logout made successfully');
    // alert('Logged out successfully ✌');
    navigate(`/`);
  };

  return (
    <div class = 'logout-btn'>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
