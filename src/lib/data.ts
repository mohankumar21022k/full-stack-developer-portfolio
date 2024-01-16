import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import currencyExchangeAppImg from "@/../public/currency-exchange-app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Consultant",
    location: "JK Tech | Bengaluru",
    description:
      "Working as a Software Engineer. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Current",
  },
  {
    title: "Associate Consultant",
    location: "JK Tech | Bengaluru",
    description:
      "Started working as a Software Engineer",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CURRENCY EXCHANGE APPLICATION",
    description:
      "Developed a web application with essential functionalities utilizing Node.js and Angular. Users an get convertion rates of various currencies.",
    tags: ["Node", "Angular", "API's"],
    imageUrl: currencyExchangeAppImg,
  },
  {
    title: "LIBRARY MANAGEMENT SYSTEM",
    description: `
      Pioneered microservices-based backend architecture for a web application using Node.js with the Express
      Framework and MongoDB to demonstrate acquired knowledge.
    `,
    tags: ["Microservices", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    imageUrl: currencyExchangeAppImg,
  },
  {
    title: "HAND GESTURE RECOGNITION USING CNN",
    description: `A simple hand gesture recognition model leveraging convolutional neural networks to process snapshots,
      enabling seamless communication through sign language, Using Python, Keras and OpenCV.
    `,
    tags: ["Python", "Machine Learning", "CNN", "Keras", "OpenCV"],
    imageUrl: currencyExchangeAppImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Nest.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
] as const;