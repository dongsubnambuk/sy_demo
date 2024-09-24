import React from "react";
import { Link } from "react-router-dom";

import '../CSS/ToSignup.css';

const ToSignup = () => {
  return (
    <div className="findid-container">
      <h5> 아직 회원이 아니신가요? </h5>
      <nav className="ToSignup">
        <div className="ToSignup-btn">
          <Link to="/Signup" className="nav-link-tosignup">
            <h5>회원가입</h5>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ToSignup;
