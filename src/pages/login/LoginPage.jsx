import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <MainLayout>
      <section id="registration">
        <div class="container-registration">
          <h1 class="regis-header">Login</h1>
          <LoginForm />
          <p class="no-account">
            Don't have account? <Link to="/registration">Register</Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoginPage;
