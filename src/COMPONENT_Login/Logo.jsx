import React from "react";
import logo from "../image/logo.png";
import '../CSS/Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="login-logo" src={logo}></img>    
    </div>
  );
};

export default Logo;