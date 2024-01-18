"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInview } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInview("About", 0.90);

    return (
        <motion.section ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about">
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                While doing my <span className="font-medium">Bachelor's</span> degree, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                Secured a <span className="font-medium">job offer</span> prior to finishing my degree exams 
                at a tech company.{" "} <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    Angular, Node.js, Nest.js, and PostgreSQL
                </span>
                . I am also familiar with popular programming languages such as <span className="font-medium">TypeScript, 
                JavaScript, Python, Java, and SQL.</span> I am always looking to
                learn new technologies. I was recently <span className="italic">certified</span> as {" "}
                <span className="font-medium">Professional Cloud Developer</span> by {" "}
                <span className="font-medium">Google Cloud</span>
                . I'm currently exploring {" "}
                <span className="font-medium">React and Next.js</span> while looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy <span className="font-medium">playing
                video games, watching movies,</span> and <span className="font-medium">doing charcoal drawing.</span>{" "}
                I occasionally indulge in playing the keyboard as part of my interests.
            </p>
        </motion.section>
    );
}
