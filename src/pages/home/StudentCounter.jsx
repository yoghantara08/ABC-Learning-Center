import "./Home.css";

const StudentCounter = () => {
  return (
    <section id="student-counter">
      <div className="container">
        <div className="student-box">
          <span>{">"} 20,000</span>
          <p>Learners</p>
        </div>
        <div className="student-box">
          <span>{">"} 1,000</span>
          <p>Enterprise</p>
        </div>
        <div className="student-box">
          <span>{">"} 85%</span>
          <p>Completion</p>
        </div>
      </div>
    </section>
  );
};

export default StudentCounter;
