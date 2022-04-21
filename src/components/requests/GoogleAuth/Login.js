import React, { useState } from 'react'

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const clientId = '769095172814-jm9tvrdefmgu11sngmtramlfholo2nnr.apps.googleusercontent.com';
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('Login Success', res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log('Login Failed', res);
  };

  const onSignoutSuccess = () => {
    alert("You have been signed out successfully");
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

return (
    <div>
      {
        showLoginButton ?
        <GoogleLogin
          clientId = {clientId}
          buttonText = 'Login'
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        /> : null
      }
      {
        showLogoutButton ?
        <GoogleLogout
        clientId = {clientId}
        buttonText = 'Logout'
        onLogoutSuccess={onSignoutSuccess}
      >
      </GoogleLogout> : null
      }

    </div>
  );
}

export default Login;