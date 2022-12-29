import { course1 } from "../../../assets/images";

const CourseDetails = () => {
  return (
    <section id="course-details">
      <div className="container-course course-details">
        <div className="course-description">
          <h2 className="header">Course Description</h2>
          <p>
            Websites in today's era have become a major need that cannot be
            ignored. All business or education sectors can use the website as a
            tool for promotion, exchange of information, and others. Based on
            data from the World Wide Web Technology Surveys, of all active
            websites, 88.2% use HTML, 95.6% use CSS and 95% use JavaScript. This
            class thoroughly discusses the basics of HTML, CSS and JavaScript as
            the three foundations of website creation.
          </p>
          <img src={course1} alt="Front-End" />
        </div>
        <div className="course-faq">
          <h2 className="header">Frequently Asked Questions</h2>
          <h3>What does a Front-End Developer do?</h3>
          <p>
            A Front-End Developer builds the front-end portion of websites and
            web applications—that is, the part that users actually see and
            interact with. A front-end developer creates websites and
            applications using web languages such as HTML, CSS, and JavaScript
            allow users to access and interact with the site or app.
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
          <h3>Is there demand for Front-End Developer?</h3>
          <p>
            Startups have increased and the use of smart devices also increased,
            which are mostly app-based or web-based businesses. For front-end
            developers, this paved the way for a more increase in demand. For
            every commercial website or apps, front-end developers are much
            needed.
          </p>
          <p>
            Front-End development companies have specialists and highly
            dedicated front-end developers, as their need is more. They provide
            all kinds of front-end development services to their clients based
            on project requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
