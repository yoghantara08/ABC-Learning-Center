import MainLayout from "../../components/layout/MainLayout";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import HeroBanner from "./HeroBanner";

const ContactPage = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <ContactInformation />
      <ContactForm />
    </MainLayout>
  );
};

export default ContactPage;
