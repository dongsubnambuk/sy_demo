import React from "react";
import '../CSS/Input.css';

const Input = ({ type, placeholder, value, onChange }) => (
  <div className="input-container">
    <input className="input" type={type} placeholder={placeholder} value={value} onChange={onChange}/> 
  </div>
);

export default Input;

// userState로 userID 관리
// (e) => setID(e.target.value) : 사용자가 입력한 값(e.target.value)을 setID함수로 userID에 업데이트