import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from '@/../public/projects/Portfolio.png';
import currencyExchangeAppImg from "@/../public/projects/Currency-Exchange.png";
import libraryManagementSystemImg from "@/../public/projects/Library-Management-System.png"
import cnnImg from "@/../public/projects/CNN.png"
import gcpDevCertImg from '@/../public/certifications/Google-Cloud-Professional-Developer.png';
import ibmDataScienceCertImg from '@/../public/certifications/IBM-Data-Science-Professional.png';
import careerEssentialsCertImg from '@/../public/certifications/Career-Essentional-In-GenerativeAI.jpg';
import javaFullStackCertImg from '@/../public/certifications/Java-Full-Stack.jpg';
import awsCertImg from '@/../public/certifications/AWS-Essentials.png';
import nodejsCertImg from '@/../public/certifications/NodeJS.jpg';
import nestjsCertImg from '@/../public/certifications/NestJS.png';

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
      `Currently employed as a Software Engineer, I'm also upskilling as a full-stack developer, 
      exposing myself to a wide array of learning opportunities.`,
    icon: React.createElement(CgWorkAlt),
    date: "September 2022 - Current",
  },
  {
    title: "Associate Consultant",
    location: "JK Tech | Bengaluru",
    description:
      "Underwent comprehensive training in wide range of technologies and started working as a Software Engineer",
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
    title: "PERSONAL PORTFOLIO",
    description: `A curated display about me, my professional and educational journey, 
    featuring diverse projects and skills. Snapshot of my expertise in 
    Software Development, showcasing a blend of creativity and technical proficiency.`,
    tags: ["React", "Next.js"],
    imageUrl: portfolioImg,
  },
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
    imageUrl: cnnImg,
  },
] as const;


export const certificationsData = [
  {
    id: 1,
    title: "Google Cloud Certified Professional Cloud Developer",
    description:
      "Google Cloud",
    tags: ["GCP"],
    imageUrl: gcpDevCertImg,
  },
  {
    id: 2,
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    description: "LinkedIn Learning",
    tags: ["Generative AI"],
    imageUrl: careerEssentialsCertImg,
  },
  {
    id: 3,
    title: "IBM Data Science Professional",
    description: "Coursera",
    tags: ["Python", "Machine Learning"],
    imageUrl: ibmDataScienceCertImg,
  },
  {
    id: 4,
    title: "Java Full-Stack Course",
    description: "Pentagon Space",
    tags: ["Java", "SpringBoot", "Hibernate"],
    imageUrl: javaFullStackCertImg,
  },
  {
    id: 6,
    title: "AWS Essentials",
    description: "A Cloud Guru",
    tags: ["AWS"],
    imageUrl: awsCertImg,
  },
  {
    id: 7,
    title: "NodeJS - The Complete Guide",
    description: "Udemy",
    tags: ["Node.js"],
    imageUrl: nodejsCertImg,
  },
  {
    id: 8,
    title: "NestJS Fundamentals",
    description: "Official NestJS Course",
    tags: ["Nest.js"],
    imageUrl: nestjsCertImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Nest.js",
  "Express",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Angular",
  "AWS",
  "Google Cloud",
  "Redis",
  "Kibana",
  "RabbitMQ",
  "Postman",
  "Docker",
  "Kubernetes",
  "Microservices",
  "Tailwind",
  "Redux",
  "React",
  "Next.js",
  "Critical thinking",
  "Teamwork",
  "Effective Communication"
] as const;