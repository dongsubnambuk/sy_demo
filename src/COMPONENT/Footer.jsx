import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Footer.css';
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <nav className="footer-nav">
        <div className="footer-btn">
          <Link to="/Bar" className="nav-link">
            <FontAwesomeIcon icon={faBars} size="2x" style={{ color: "#ffffff", }} />
          </Link>
        </div>
        <div className="footer-btn">
          <Link to="/Cart" className="nav-link">
            <FontAwesomeIcon icon={faCartArrowDown} size="2x" style={{ color: "#ffffff", }} />
          </Link>
        </div>
        <div className="footer-btn">
          <Link to="/Homepage" className="nav-link">
            <FontAwesomeIcon icon={faHouse} size="2x" style={{ color: "#ffffff", }} />
          </Link>
        </div>
        <div className="footer-btn">
          <Link to="/Diet" className="nav-link">
            <FontAwesomeIcon icon={faBowlFood} size="2x" style={{ color: "#ffffff", }} />
          </Link>
        </div>
        <div className="footer-btn">
          <Link to="/Mypage" className="nav-link">
            <FontAwesomeIcon icon={faUser} size="2x" style={{ color: "#ffffff", }} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Footer;