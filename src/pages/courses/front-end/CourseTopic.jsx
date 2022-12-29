import { cssLogo, htmlLogo, javascriptLogo } from "../../../assets/images";

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
              <img src={htmlLogo} alt="HTML" />
            </div>
            <div className="topic-description">
              <h2 className="header">HTML</h2>
              <p className="icon">
                <i className="fa-solid fa-star"></i> 4,89
              </p>
              <p className="icon">
                <i className="fa-solid fa-award"></i> Beginner
              </p>
              <p className="text">
                Get started as a web developer by learning the basics of HTML,
                the essential language of the web.
              </p>
              <a href="#course/front-end-schedule">
                <button className="btn-schedule">Course Schedule</button>
              </a>
            </div>
          </div>

          <div className="topic">
            <div className="topic-image">
              <img src={cssLogo} alt="CSS" />
            </div>
            <div className="topic-description">
              <h2 className="header">CSS</h2>
              <p className="icon">
                <i className="fa-solid fa-star"></i> 4,84
              </p>
              <p className="icon">
                <i className="fa-solid fa-award"></i> Beginner
              </p>
              <p className="text">
                Learn and practice the fundamentals of CSS to add beautiful
                styling to your webpages.
              </p>
              <a href="/courses/frontend-schedule">
                <button className="btn-schedule">Course Schedule</button>
              </a>
            </div>
          </div>

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
                <i className="fa-solid fa-award"></i> Intermediate
              </p>
              <p className="text">
                Learn the fundamentals of JavaScript: syntax, variables,
                conditionals, and functions.
              </p>
              <a href="/courses/frontend-schedule">
                <button className="btn-schedule">Course Schedule</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseTopic;
