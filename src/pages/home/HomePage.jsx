import MainLayout from "../../components/layout/MainLayout";
import HeroBanner from "./HeroBanner";
import OurCompany from "./OurCompany";

import StudentCounter from "./StudentCounter";
import JoinToday from "../../components/sections/JoinToday";
import Partner from "../../components/sections/Partner";
import courses from "../../model/course";
import CourseList from "../../components/sections/CourseList";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <Partner />
      <StudentCounter />
      <OurCompany />
      <CourseList courses={courses} />
      <JoinToday />
    </MainLayout>
  );
};

export default HomePage;
