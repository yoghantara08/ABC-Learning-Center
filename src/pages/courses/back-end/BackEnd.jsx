import MainLayout from "../../../components/layout/MainLayout";

import "../CourseDetail.css";
import CourseDetails from "../front-end/CourseDetails";
import Facilities from "../front-end/Facilities";
import StudentTestimonial from "../StudentTestimonial";
import CourseTopic from "./CourseTopic";

const BackEnd = () => {
  return (
    <MainLayout>
      <section id="hero-course">
        <div className="container-course">
          <div className="banner-text-detail">
            <h1>Back-End Developer</h1>
            <p>
              Students are prepared to become Back-End Developers according to
              industry needs.
            </p>
            <a href="/user/registration">
              <button className="btn-join-today">Join Today</button>
            </a>
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

export default BackEnd;
