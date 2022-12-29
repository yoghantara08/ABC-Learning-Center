import {
  mentor1,
  mentor2,
  mentor3,
  mentor4,
  mentor5,
  mentor6,
} from "../../assets/images";
import TeamCard from "./TeamCard";

const teams = [
  { name: "Olivia Cassandra", position: "CEO & Co-Founder", image: mentor1 },
  { name: "Alexa", position: "Co-Founder", image: mentor2 },
  { name: "Andrew", position: "Co-Founder", image: mentor3 },
  { name: "Ryou Kuga", position: "Back-End Developer", image: mentor4 },
  { name: "David", position: "Front-End Developer", image: mentor5 },
  { name: "Yola", position: "Curriculum Management", image: mentor6 },
];

const OurTeam = () => {
  return (
    <section id="our-team">
      <h2 className="our-team-title">
        Meet <span>Our Team</span>
      </h2>
      <div className="our-team-container">
        {teams.map((team) => (
          <TeamCard
            key={team.name}
            name={team.name}
            position={team.position}
            image={team.image}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
