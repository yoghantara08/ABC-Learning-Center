import { Link } from "react-router-dom";
import { awsLogo, javaLogo, javascriptLogo } from "../../../assets/images";

const CourseTopic = () => {
  return (
    <>
      <div className="what-will-you-learn">
        <div className="container-course">
          <h2>What will you learn?</h2>
        </div>
      </div>
      <section id="course-topic">
        <div className="container-course course-topic">
          <div className="topic">
            <div className="topic-image">
              <img src={javascriptLogo} alt="Javascript" />
            </div>
            <div className="topic-description">
              <h2 className="header">Javascript</h2>
              <p className="icon">
                <i className="fa-solid fa-star"></i> 4,82
              </p>
              <p className="icon">
                <i className="fa-solid fa-award"></i> Beginner
              </p>
              <p className="text">
                Learn the fundamentals of JavaScript: syntax, variables,
                conditionals, and functions.
              </p>
              <Link to="/course/backend-schedule">
                <button className="btn-schedule">Course Schedule</button>
              </Link>
            </div>
          </div>

          <div className="topic">
            <div className="topic-image cntr" style={{ marginBottom: "50px" }}>
              <img src={javaLogo} alt="Java" />
            </div>
            <div className="topic-description">
              <h2 className="header">Java</h2>
              <p className="icon">
                <i className="fa-solid fa-star"></i> 4,79
              </p>
              <p className="icon">
                <i className="fa-solid fa-award"></i> Intermediate
              </p>
              <p className="text">
                Learn the basics of the popular Java language in this
                introductory course.
              </p>
              <Link to="/course/backend-schedule">
                <button className="btn-schedule">Course Schedule</button>
              </Link>
            </div>
          </div>

          <div className="topic">
            <div className="topic-image cntr">
              <img src={awsLogo} alt="AWS" />
            </div>
            <div className="topic-description">
              <h2 className="header">AWS</h2>
              <p className="icon">
                <i className="fa-solid fa-star"></i> 4,89
              </p>
              <p className="icon">
                <i className="fa-solid fa-award"></i> Intermediate
              </p>
              <p className="text">
                Learn the foundations of cloud computing across platforms like
                AWS.
              </p>
              <Link to="/course/backend-schedule">
                <button className="btn-schedule">Course Schedule</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseTopic;
