const LoginForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form id="regis-form" onSubmit={onSubmitHandler}>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email-regis"
        placeholder="sulivan@email.com"
      />

      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password-regis"
        placeholder="*********"
      />

      <button type="submit" class="btn-submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
