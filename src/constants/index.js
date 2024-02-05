import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
  az_brand,
  klimup,
  whrrl,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "CTO",
    company_name: "Afordia Zero",
    icon: az_brand,
    iconBg: "#eee",
    date: "June 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Whrrl",
    icon: whrrl,
    iconBg: "#fff",
    date: "Jan 2023 - Present",
    points: [
      "Built an aggregation feature with export functionality using Angular.js that dynamically displays all the commodities(paginated) held in our listed warehouses for the business team to be able to analyze and report on the trends of our listed commodities.",
      "Configured ec2 servers with Nginx reverse proxy to handle requests from multiple domains to reduce deployment costs by 25%.",
      "Configured automatic timestamped AMI creation and deletion on AWS to add a layer of redundancy on the event of failure or deploying identical resources.",
      "Boosted productivity of development on existing applications by 45% by configuring Docker files to spin up containers with all the required tech stacks to work on each unique application.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/MingiJ",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/jeff-karanja-6b88321a4/",
  },
];

export const projects = [
  {
    iconUrl: klimup,
    theme: "btn-back-red",
    name: "Klimup",
    description:
      "Created a functional frontend for users to track their statistics in their role against climate change",
    link: "https://klimup-landing.vercel.app/",
  },
];
