import { Link } from "react-router-dom";

const ContactInformation = () => {
  return (
    <section id="contact-information">
      <div className="contact-box">
        <i className="fa-solid fa-phone header"></i>
        <span>Contact Customer Support</span>
        <p>
          Interested in ABC Learning Center? If you have any doubts in your mind
          don't worry, we're here ready to help you
        </p>
        <Link>+62 812 345 6789</Link>
      </div>
      <div className="contact-box">
        <i className="fa-solid fa-people-group header"></i>
        <span>Our Social Media</span>
        <p>Follow our social media and get updated on what we are doing now!</p>
        <div className="social-media">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
