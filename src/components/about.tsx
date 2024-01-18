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
                While doing my Bachelors degree in{" "}
                <span className="font-medium">Electronics and Communication</span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    Angular, Node.js, Nest.js, and PostgreSQL
                </span>
                . I am also familiar with TypeScript, JavaScript, Python, Java, C#, HTML, CSS, SQL, Shell
                and HashiCorp Configuration Language(Terraform) . I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and do pencil sketches. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                exploring {" "}
                <span className="font-medium">React and Next.js</span>. I'm also
                learning how to play the keyboard.
            </p>
        </motion.section>
    );
}
