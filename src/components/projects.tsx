"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Project from "./project";
import { projectsData } from "@/lib/data";
import { useSectionInview } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInview("Projects", 0.5);

  return (
    <motion.section ref={ref}
      id="projects" 
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
             <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
