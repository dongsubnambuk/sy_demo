import React from 'react';
import '../CSS/Button.css';

const Button = ({ onClick }) => {
  return (
    <div className='btn-container'>
      <button onClick={onClick} className="btn">
      로그인
      </button>
    </div>
  );
};

export default Button;