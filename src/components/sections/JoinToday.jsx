import { Link } from "react-router-dom";
import "./JoinToday.css";

const JoinToday = () => {
  return (
    <section id="join-today">
      <div className="container-join">
        <h2>
          Let's Prove It by Yourself, That ABC Learning Center Can Help Improve
          Your Programming Skills
        </h2>
        <Link to="/registration">
          <button className="btn-join-today">Join Today</button>
        </Link>
      </div>
    </section>
  );
};

export default JoinToday;
