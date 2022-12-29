import {
  awsPartner,
  facebookPartner,
  googlePartner,
  lithanPartner,
  microsoftPartner,
  samsungPartner,
} from "../../assets/images";
import "./Partner.css";

const Partner = () => {
  return (
    <section id="partners">
      <div className="partners-container">
        <div className="partner">
          <div className="partner-logo">
            <img src={googlePartner} alt="Google" />
          </div>
          <div className="partner-logo">
            <img src={microsoftPartner} alt="Microsoft" />
          </div>
          <div className="partner-logo">
            <img src={lithanPartner} alt="Lithan" />
          </div>
          <div className="partner-logo">
            <img src={facebookPartner} alt="Facebook" />
          </div>
          <div className="partner-logo">
            <img src={samsungPartner} alt="Samsung" />
          </div>
          <div className="partner-logo">
            <img src={awsPartner} alt="AWS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
