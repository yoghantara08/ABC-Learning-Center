const TeamCard = ({ name, position, image }) => {
  return (
    <div className="card-about">
      <div className="card-about-image">
        <img src={image} alt="Mentor" />
      </div>
      <div className="card-about-text">
        <span>{name}</span>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
