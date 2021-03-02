import React from 'react';
import './Login.css';
import { loginUrl } from '../spotify';




const Login = () => {
  return (

    <div className="login">
      <img
      src="https://aldianews.com/sites/default/files/articles/spotify-logo-1920x1080_fouoik-1.jpg"
      alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
