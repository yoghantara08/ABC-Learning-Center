import "./MainNavigation.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { abcLogo } from "../../../assets/images";

const MainNavigation = ({ className }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className={className}>
      <nav className="main-navigation">
        <div className="nav-container">
          <Link to="/" className="anchor-logo">
            <div className="nav-logo">
              <img src={abcLogo} alt="ABC" />
              <p>
                ABC<span>LEARNING</span>
              </p>
            </div>
          </Link>

          <ul className={`nav-links ${active ? "active" : ""}`}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="dropdown">
              <Link
                preventScrollReset={true}
                className="nav-link"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Course <i className="fa-solid fa-caret-down"></i>
              </Link>
              <ul className={`dropdown-menu ${show ? "show" : ""}`}>
                <li>
                  <Link className="dropdown-item" to="/courses">
                    Course List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/courses/frontend">
                    Front-End
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/courses/backend">
                    Back-End
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className={`nav-button ${active ? "active" : ""}`}>
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
            <Link to="/registration">
              <button className="btn-register">Register</button>
            </Link>
          </div>

          <div
            className="hamburger-menu"
            onClick={() => {
              setActive(!active);
            }}
          >
            <span></span>
            <span className={active ? "active" : ""}></span>
            <span className={active ? "active" : ""}></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
