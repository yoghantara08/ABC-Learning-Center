import { useState } from "react";
import { course1, course2 } from "../../assets/images";
import "./CourseList.css";

import CoursePath from "./CoursePath";

const CourseList = ({ courses }) => {
  const [activeCourse, setActiveCourse] = useState("frontend");

  const frontendContent = (
    <CoursePath
      key={courses[0].courseId}
      courseId={courses[0].courseId}
      title={courses[0].title}
      classCount={courses[0].classCount}
      studentCount={courses[0].studentCount}
      description={courses[0].description}
      threeCourses={courses[0].threeCourses}
    />
  );

  const backendContent = (
    <CoursePath
      key={courses[1].title}
      courseId={courses[1].courseId}
      title={courses[1].title}
      classCount={courses[1].classCount}
      studentCount={courses[1].studentCount}
      description={courses[1].description}
      threeCourses={courses[1].threeCourses}
    />
  );

  return (
    <section id="course">
      <div className="course-container">
        <div className="course-path-container">
          <div
            id="frontend"
            className={`course-path-image ${
              activeCourse === "frontend" ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${course1})` }}
            onClick={() => setActiveCourse("frontend")}
          >
            <h3>{courses[0].title}</h3>
          </div>
          <div id="show-front-end" className="course-path-content">
            {frontendContent}
          </div>
          <div
            id="backend"
            className={`course-path-image ${
              activeCourse === "backend" ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${course2})` }}
            onClick={() => setActiveCourse("backend")}
          >
            <h3>{courses[1].title}</h3>
          </div>
          <div id="show-back-end" className="course-path-content">
            {backendContent}
          </div>
        </div>

        <div className="course-path-content" id="path-content">
          {activeCourse === "frontend" ? frontendContent : backendContent}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
