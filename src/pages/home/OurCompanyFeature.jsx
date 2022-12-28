import { Link } from "react-router-dom";

const OurCompanyFeature = ({ image, imageAlt, title, content }) => {
  return (
    <div className="feature-box">
      <div className="just-wrapper">
        <div className="feature-img">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="feature-text">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
      <div className="btn-learn-more">
        <Link to="/about">
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default OurCompanyFeature;
