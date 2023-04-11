import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Navigation Links</h1>
      <ul>
        <li style={{ "--accent-color": "#60c5a6" }}>
          <Link to="/" className="icon">
            <i className="fa-light fa-house"></i>
          </Link>
          <div className="title">Home</div>
        </li>
        <li style={{ "--accent-color": "#f20071" }}>
          <Link to="/headlines" className="icon">
            <i className="fa-light fa-heading"></i>
          </Link>
          <div className="title">Headlines </div>
        </li>
        <li style={{ "--accent-color": "#FCBA35" }}>
          <Link to="/books" className="icon">
            <i className="fa-light fa-book"></i>
          </Link>
          <div className="title">Books </div>
        </li>
        <li style={{ "--accent-color": "#DAE438" }}>
          <Link to="/business" className="icon">
            <i className="fa-light fa-newspaper"></i>
            {/* <i className="fa-brands fa-js"></i> */}
          </Link>
          <div className="title">Business</div>
        </li>
        <li style={{ "--accent-color": "#994D7F" }}>
          <Link to="/world" className="icon">
            <i className="fa-solid fa-earth-americas"></i>
          </Link>
          <div className="title">World</div>
        </li>
      </ul>
      <div className="footer-basic">
        <footer>
          <p className="copyright">Azzyy News © 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
