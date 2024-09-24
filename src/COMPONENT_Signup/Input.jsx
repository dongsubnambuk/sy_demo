import React from "react";
import '../CSS/Input.css';

const Input = ({ type, placeholder, value, onChange }) => (
  <div className="input-container">
    <input className="input" type={type} placeholder={placeholder} value={value} onChange={onChange}/> 
  </div>
);

export default Input;