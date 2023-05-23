import {
  mobile,
  backend,
  creator,
  web,
  edu,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hacker,
  tour,
  travel,
  todo,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const resume = [
  {
    link: "https://drive.google.com/file/d/1L1R5nQNDFuwk54qsaN5U159Fd8irYCqt/view?usp=share_link",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cyber Security Intern",
    company_name: "DRDO internship",
    icon: hacker,
    iconBg: "#383E56",
    date: "February 2023 - Present",
    points: [
      "This internship is about cyber security and indentifying the vulnerabilities in the Applications based on C/C++.",
      "Created various C/C++ vulnerable codes for the testing of the applications.",
      "checked codes vulnerability till machine level and in assembly language.",
      "Provided solution to identified vulnerabilties and thus helping in making the C/C++ based applications more secure.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Technology - computer science",
    board: "Malaviya National Institute of Technology, Jaipur",
    icon: hacker,
    iconBg: "#383E56",
    date: "2020-2024",
    points: [
      "My current CGPA is 7.98.",
    ],
  },
  {
    title: "JEE Mains-2020",
    board: "NTA",
    icon: hacker,
    iconBg: "#383E56",
    date: "2020",
    points: [
      "Received 99.4106 percentile and secure 1171 OBC rank.",
    ],
  },
  {
    title: "12Th Board",
    board: "RBSE board",
    icon: hacker,
    iconBg: "#383E56",
    date: "2018",
    points: [
      "Received 96.80%.",
    ],
  },
  {
    title: "10th Board",
    board: "CBSE",
    icon: hacker,
    iconBg: "#383E56",
    date: "2016",
    points: [
      "Received 10.0 CGPA.",
    ],
  },
];


const projects = [
  {
    name: "India Tourism",
    description:
      "This website is designed to the various famous tourist places in India. This contains various sections like home, about, service, gallery, contact and about us. This a beautiful website with various effects and videos.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/4nish/travel",
  },
  {
    name: "ToDo List",
    description:
      "This is a full web app for todo list. User can create new task, delete task and mark task as completed. This is a full responsive web app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/4nish/todo",
  },
  {
    name: "Tour Guide",
    description:
      "This a full stack tour management web app. User can check various hotels and book tour packages. This is a full responsive web app.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
    ],
    image: tour,
    source_code_link: "https://github.com/4nish/tour-management",
  },
];

export { resume,services, technologies, experiences, projects,education };
