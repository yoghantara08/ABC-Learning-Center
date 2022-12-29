import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import HeroBanner from "./HeroBanner";
import "./Sitemap.css";

const SitemapPage = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <section id="sitemap">
        <div class="sitemap-container">
          <div class="sitemap-box">
            <h3>General</h3>
            <Link to="/">Homepage</Link>
            <Link to="/courses">Course Preview</Link>
            <Link to="/about">Our Company</Link>
            <Link to="/about">Our Team</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div class="sitemap-box">
            <h3>Course</h3>
            <Link to="/courses">Course List</Link>
            <Link to="/courses/front-end">Front-End Developer</Link>
            <Link to="/courses/back-end">Back-End Developer</Link>
          </div>
          <div class="sitemap-box">
            <h3>Contact</h3>
            <Link to="/contact">Contact Information</Link>
            <Link to="/contact">Contact Form</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SitemapPage;
