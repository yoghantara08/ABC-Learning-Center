import { student1, student2 } from "../../assets/images";

const StudentTestimonial = () => {
  return (
    <section id="student-testimonial">
      <div className="container-course student-testimonial">
        <div className="testimonial-header">
          <h2>Student Testimonial</h2>
          <p>
            Thousands of successful students study at ABC Learning Center. What
            are they saying? Here are their original testimonials.
          </p>
        </div>
        <div className="testimonial">
          <div className="card-testimonial">
            <div className="card-testimonial-header">
              <div className="image">
                <img src={student2} alt="Student" />
              </div>
              <div className="card-testimonial-header-text">
                <span>Alex Nurmegov</span>
                <p>Chef Micheline</p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="card-testimonial-body">
              <p>
                This class really gives a good understanding of programming.
                With interesting language, easy to understand, and a little
                humor, I as a non-IT person can understand this class well.
                Thank you ABC Learning Center
              </p>
            </div>
          </div>

          <div className="card-testimonial">
            <div className="card-testimonial-header">
              <div className="image">
                <img src={student1} alt="Student" />
              </div>
              <div className="card-testimonial-header-text">
                <span>Zahra Kovic</span>
                <p>AWS Cloud Engineer</p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="card-testimonial-body">
              <p>
                I can upgrade my knowledge and programming competence, I'm
                really happy to be able to learn coding with languages that are
                currently popular and needed in the IT Industry. Thanks ABC
                Learning Center...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonial;
