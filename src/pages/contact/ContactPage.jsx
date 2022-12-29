import MainLayout from "../../components/layout/MainLayout";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import HeroBanner from "./HeroBanner";

import "./Contact.css";

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
