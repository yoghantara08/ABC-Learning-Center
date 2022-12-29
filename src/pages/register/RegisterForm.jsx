const RegisterForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form id="regis-form" onSubmit={onSubmitHandler}>
      <label for="first-name">First Name</label>
      <input
        type="text"
        name="first-name"
        id="first-name-regis"
        placeholder="Alex"
      />

      <label for="last">Last Name</label>
      <input
        type="text"
        name="last"
        id="last-name-regis"
        placeholder="Sulivan"
      />

      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email-regis"
        placeholder="sulivan@email.com"
      />

      <label for="address">Address</label>
      <input
        type="text"
        name="address"
        id="address-regis"
        placeholder="New York, NY 10030"
      />

      <label for="phone">Phone Number</label>
      <input
        type="number"
        name="phone"
        id="phone-regis"
        placeholder="08123456789"
      />

      <label for="select">Select Course</label>
      <select name="select" id="select-regis">
        <option value="select-valid">Select your course</option>
        <option value="Front-End Web Developer">Front-End Web Developer</option>
        <option value="Back-End Developer">Back-End Developer</option>
      </select>
      <p class="select-validator"></p>

      <button type="submit" class="btn-submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
