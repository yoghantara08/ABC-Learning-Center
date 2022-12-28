import { Link } from "react-router-dom";
import "./Home.css";
import { heroBanner3 } from "../../assets/images";

const HeroBanner = () => {
  return (
    <section id="hero-banner">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-header">
            Build Your Career As A Professional Developer
          </h1>
          <p>
            Improve your skills through fun learning with ABC Learning Center
          </p>
          <Link to="/courses">
            <button className="btn-learn">Learn Now</button>
          </Link>
        </div>

        <div className="hero-image">
          <img src={heroBanner3} alt="Hero Banner" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
