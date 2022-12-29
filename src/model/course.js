import {
  awsLogo,
  cssLogo,
  htmlLogo,
  javaLogo,
  javascriptLogo,
} from "../assets/images";

const courses = [
  {
    courseId: "frontend",
    title: "Front-End Web Developer",
    classCount: "3",
    studentCount: "12k",
    description:
      "The curriculum is prepared by ABC Learning Center and industry players in the field of Web Development. Students are prepared to become Front-End Web Developers according to industry standards.",
    threeCourses: [
      {
        name: "HTML5",
        rate: "4,89",
        difficulty: "Beginner",
        image: htmlLogo,
      },
      {
        name: "CSS3",
        rate: "4,84",
        difficulty: "Beginner",
        image: cssLogo,
      },
      {
        name: "Javascript",
        rate: "4,82",
        difficulty: "Intermediate",
        image: javascriptLogo,
      },
    ],
  },
  {
    courseId: "backend",
    title: "Back-End Developer",
    classCount: "3",
    studentCount: "8k",
    description:
      "The curriculum was compiled by ABC Learning Center together with AWS and the Back-End Development industry. Students are prepared to become Back-End Developers according to industry needs.",
    threeCourses: [
      {
        name: "Javascript",
        rate: "4,82",
        difficulty: "Beginner",
        image: javascriptLogo,
      },
      {
        name: "Java",
        rate: "4,79",
        difficulty: "Intermediate",
        image: javaLogo,
      },
      {
        name: "AWS",
        rate: "4,89",
        difficulty: "Intermediate",
        image: awsLogo,
      },
    ],
  },
];

export default courses;
