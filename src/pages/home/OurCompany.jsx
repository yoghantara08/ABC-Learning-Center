import { feature1, feature2, feature3 } from "../../assets/images";
import OurCompanyFeature from "./OurCompanyFeature";

const features = [
  {
    image: feature1,
    imageAlt: "Code Review",
    title: "Code review from Expert Developer",
    content:
      "Validate your skills through a 1-on-1 Professional Code Review provided directly by a Developer Expert.",
  },
  {
    image: feature2,
    imageAlt: "Flexible Study",
    title: "Flexible study according to your schedule",
    content:
      "Learn anytime, anywhere, independently. Free to choose classes according to interest in learning. Lifelong access to classes and discussion forums after graduation.",
  },
  {
    image: feature3,
    imageAlt: "Trusted Alumni",
    title: "Trusted alumni in various companies",
    content:
      "A certificate that proves the fundamental knowledge and real skills that global companies want.",
  },
];

const OurCompany = () => {
  return (
    <section id="company">
      <div className="company-container">
        <div className="company-header">
          <h2>Why Choose ABC Learning Center</h2>
          <p>
            It's time to choose wisely for your learning resources. ABC Learning
            Center also provides professional Mentors who have a decade of
            experience to guide you along your journey.
          </p>
        </div>
        <div className="company-feature">
          {features.map((feature) => (
            <OurCompanyFeature
              key={feature.imageAlt}
              image={feature.image}
              imageAlt={feature.imageAlt}
              title={feature.title}
              content={feature.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
