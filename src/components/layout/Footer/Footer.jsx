import { Link } from "react-router-dom";
import { abcLogo } from "../../../assets/images";
import "./Footer.css";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={abcLogo} alt="ABC" />
            </div>
            <div className="content">
              <span className="header">Company</span>
              <Link to="/about">About Us</Link>
              <Link to="/about">Our Team</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/sitemap">Site Map</Link>
            </div>
            <div className="content">
              <span className="header">Program</span>
              <Link to="/courses/frontend">Front-End Developer</Link>
              <Link to="/courses/backend">Back-End Developer</Link>
            </div>
            <div className="content">
              <span className="header">Follow Us</span>
              <Link>
                <i className="fa-brands fa-twitter"></i> Twitter
              </Link>
              <Link>
                <i className="fa-brands fa-youtube"></i> Youtube
              </Link>
              <Link>
                <i className="fa-brands fa-facebook"></i> Facebook
              </Link>
              <Link>
                <i className="fa-brands fa-instagram"></i> Instagram
              </Link>
            </div>
            <div className="content">
              <span className="header">Legal</span>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          </div>
          <hr />

          <div className="footer-copyright">
            <p className="copyright">
              © ABC Learning Center 2022. All Rights Reserved
            </p>
            <p className="created-by">
              Created with <i className="fa-solid fa-heart"></i> by
              <a
                href="https://www.instagram.com/gustutyoghantara/"
                target="_blank"
                rel="noreferrer"
              >
                Gustut Yoghantara
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
