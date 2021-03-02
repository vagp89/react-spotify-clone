import React from 'react';
import './Login.css';
import { loginUrl } from '../spotify';




const Login = () => {
  return (

    <div className="login">
      <img
      src="https://i.vimeocdn.com/video/583976031_1280x720.jpg"
      alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
