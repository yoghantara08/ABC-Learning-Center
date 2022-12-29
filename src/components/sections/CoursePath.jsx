import { Link } from "react-router-dom";
import CourseBox from "./CourseBox";

const CoursePath = ({
  courseId,
  title,
  classCount,
  studentCount,
  description,
  threeCourses,
}) => {
  return (
    <>
      <div className="header">
        <div className="just-wrapper">
          <h3>{title}</h3>
          <p>
            <i className="fa-solid fa-book-bookmark"></i> {classCount} Classes
          </p>
          <p>
            <i className="fa-solid fa-graduation-cap"></i> {studentCount}{" "}
            Students
          </p>
        </div>
        <div className="description">
          <p>{description}</p>
          <Link to={`/courses/${courseId}`}>
            <button className="btn-learn">Learn More</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="content-box-wrapper">
        {threeCourses.map((course) => (
          <CourseBox
            key={course.courseId}
            name={course.name}
            rate={course.rate}
            difficulty={course.difficulty}
            image={course.image}
          />
        ))}
      </div>
    </>
  );
};

export default CoursePath;
