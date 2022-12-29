import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import Facilities from "./Facilities";

import "../CourseDetail.css";
import CourseDetails from "./CourseDetails";
import CourseTopic from "./CourseTopic";
import StudentTestimonial from "./StudentTestimonial";

const FrontEnd = () => {
  return (
    <MainLayout>
      <section id="hero-course">
        <div className="container-course">
          <div className="banner-text-detail">
            <h1>Front-End Web Developer</h1>
            <p>
              Students are prepared to become Front-End Web Developers according
              to industry standards.
            </p>
            <Link to="/registration">
              <button className="btn-join-today">Join Today</button>
            </Link>
          </div>
        </div>
      </section>
      <Facilities />
      <CourseDetails />
      <CourseTopic />
      <StudentTestimonial />
    </MainLayout>
  );
};

export default FrontEnd;
