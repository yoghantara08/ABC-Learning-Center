const Facilities = () => {
  return (
    <section id="facilities">
      <div className="container-course">
        <h3 className="facilities-header">What Will You Get</h3>
        <div className="facilities">
          <div className="facilities-box">
            <div className="box-icon">
              <i className="fa-solid fa-bookmark"></i>
            </div>
            <div className="box-text">
              <span>Certificate</span>
              <p>
                Earn an industry standard certificate upon completion of this
                class.
              </p>
            </div>
          </div>

          <div className="facilities-box">
            <div className="box-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="box-text">
              <span>Code Review</span>
              <p>
                The code you are working on will be reviewed comprehensively by
                the Reviewer.
              </p>
            </div>
          </div>

          <div className="facilities-box">
            <div className="box-icon">
              <i className="fa-solid fa-people-carry-box"></i>
            </div>
            <div className="box-text">
              <span>Discussion Forum</span>
              <p>Discuss learning materials with other students.</p>
            </div>
          </div>

          <div className="facilities-box">
            <div className="box-icon">
              <i className="fa-solid fa-book"></i>
            </div>
            <div className="box-text">
              <span>Module Tutorial</span>
              <p>
                Module material is presented in easy-to-understand language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
