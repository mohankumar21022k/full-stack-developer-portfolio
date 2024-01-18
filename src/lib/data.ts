import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import currencyExchangeAppImg from "@/public/Currency-Exchange.png";
import libraryManagementSystemImg from "@/public/Library-Management-System.png"

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
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
    date: "September 2022 - Current",
  },
  {
    title: "Associate Consultant",
    location: "JK Tech | Bengaluru",
    description:
      "Started working as a Software Engineer",
    icon: React.createElement(CgWorkAlt),
    date: "August 2021 - August 2022",
  }
] as const;

export const educationData = [
  {
    title: "Bachelor of Engineering",
    location: "Global Academy of Technology | Bengaluru",
    description:
      `Specialized in Electronics and Communication Engineering
      with 8.28/10 CPGA`,
    icon: React.createElement(LuGraduationCap),
    date: "August 2017 - August 2021 ",
  }
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
      Pioneered microservices-based backend architecture for a web application to demonstrate acquired knowledge.
    `,
    tags: ["Microservices", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    imageUrl: libraryManagementSystemImg,
  },
  {
    title: "HAND GESTURE RECOGNITION USING CNN",
    description: `A simple hand gesture recognition model leveraging convolutional neural networks to process snapshots,
      enabling seamless communication through sign language.
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