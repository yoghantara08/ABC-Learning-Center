import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import CourseList from "../../components/sections/CourseList";
import courses from "../../model/course";
import "./Courses.css";

const CoursesPage = () => {
  return (
    <MainLayout>
      <section id="hero-course">
        <div className="container-course">
          <div className="banner-text-detail">
            <h1>ABC Learning Center</h1>
            <h1>Course List</h1>
            <Link to="/registration">
              <button className="btn-join-today">Register</button>
            </Link>
          </div>
        </div>
      </section>
      <section style={{ marginBottom: "40px" }}>
        <CourseList courses={courses} />
      </section>
    </MainLayout>
  );
};

export default CoursesPage;
