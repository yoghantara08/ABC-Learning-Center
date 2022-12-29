const CompanyHistory = ({ image }) => {
  return (
    <section id="history">
      <div className="history-container">
        <div className="history-text">
          <h2>
            About <span>ABC Learning Center</span>
          </h2>
          <p>
            Founded in 2020 ABC Learning Center is one of the best site to learn
            professional programming. We have more than 40.000 Students around
            the world. We deliver integrated work study degrees for developing
            digital talents with global ready future skills before their
            graduation.
          </p>
          <p>
            ABC's vision is to become a leading technology education platform
            that encourages wider access to digital literacy for all Students.
            ABC has a mission to accelerate Indonesia's transition to a digital
            world through technology education that transforms lives.
          </p>
        </div>
        <div className="history-image">
          <img src={image} alt="ABC Learning Center" />
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
