const CourseBox = ({ name, rate, difficulty, image }) => {
  return (
    <div className="content-box">
      <div className="content-box-image-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="text">
        <h4>{name}</h4>
        <p>
          <i className="fa-solid fa-star"></i> {rate}
        </p>
        <p>
          <i className="fa-solid fa-award"></i> {difficulty}
        </p>
      </div>
    </div>
  );
};

export default CourseBox;
