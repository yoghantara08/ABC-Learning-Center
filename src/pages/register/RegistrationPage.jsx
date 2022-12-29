import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import RegisterForm from "./RegisterForm";
import "./Registration.css";

const RegistrationPage = () => {
  return (
    <MainLayout>
      <section id="registration">
        <div class="container-registration">
          <h1 class="regis-header">Register</h1>
          <RegisterForm />

          <p class="EULA">
            By signing up for ABC Learning Center, you agree to ABC Learning
            Center's <Link>Terms of Service</Link> &{" "}
            <Link to="/privacy-policy">Privacy Policy.</Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegistrationPage;
