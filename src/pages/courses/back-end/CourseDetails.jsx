import { course2 } from "../../../assets/images";

const CourseDetails = () => {
  return (
    <section id="course-details">
      <div className="container-course course-details">
        <div className="course-description">
          <h2 className="header">Course Description</h2>
          <p>
            Back-End Developers are developers who have a very important role,
            because Back-End Developers are a vital factor in building an
            application system even though their role is not directly visible to
            the user. A Back-End Developer must be able to build services that
            are able to support Front-End applications to function properly.
            This class thoroughly covers the basic skills of becoming a Back-End
            Developer by building a RESTful API using the popular Node.js
            technology.
          </p>
          <img src={course2} alt="Front-End" />
        </div>
        <div className="course-faq">
          <h2 className="header">Frequently Asked Questions</h2>
          <h3>What is backend in website?</h3>
          <p>
            The back- end of a website consists of a server, an application, and
            a database. A back-end developer builds and maintains the technology
            that powers those components which, together, enable the user-facing
            side of the website to even exist in the first place.
          </p>
          <h3>
            What is the difference between Front-End Developer and Back-End
            Developer?
          </h3>
          <p>
            Front and back end developers work on different sides of a website.
            Front end development is programming which focuses on the visual
            elements of a website or app that an user will interact with (the
            client side). Meanwhile, back end development focuses on the side of
            a website users can't see (the server side).
          </p>
          <h3>Is there demand for Back-End Developer?</h3>
          <p>
            Yes, web development is a good career. Mondo's annual Tech and
            Digital Marketing Salary guide found “Web Developer” was the most
            in-demand job title in tech and one of its top-paying jobs. And,
            according to the U.S. Bureau of Labor, the job market for Web
            Developers is expected to grow 15 percent by 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
