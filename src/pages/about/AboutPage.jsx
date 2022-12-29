import { companyBuilding } from "../../assets/images";
import MainLayout from "../../components/layout/MainLayout";
import JoinToday from "../../components/sections/JoinToday";
import Partner from "../../components/sections/Partner";

import "./About.css";
import CompanyHistory from "./CompanyHistory";
import HeroBanner from "./HeroBanner";
import OurTeam from "./OurTeam";

const AboutPage = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <Partner />
      <CompanyHistory image={companyBuilding} />
      <OurTeam />
      <JoinToday />
    </MainLayout>
  );
};

export default AboutPage;
