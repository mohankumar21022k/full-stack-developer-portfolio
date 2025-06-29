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
                <span className="font-medium">full-stack web development</span>. I secured a{" "}
                <span className="font-medium">job offer</span> prior to finishing my degree exams
                at a tech company. <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. Currently, I'm{" "}
                <span className="italic">solving real-world problems</span> that contribute to{" "}
                <span className="font-medium">saving lives on the road</span>, which makes the work even more
                meaningful. My core stack is{" "}
                <span className="font-medium">Angular, Node.js, Nest.js, and PostgreSQL</span>. I am also familiar
                with popular programming languages such as{" "}
                <span className="font-medium">TypeScript, JavaScript, Python, C#, and SQL</span>. I am always
                looking to learn new technologies. I was{" "}
                <span className="italic">certified</span> as a{" "}
                <span className="font-medium">Professional Cloud Developer</span> by{" "}
                <span className="font-medium">Google Cloud</span> in{" "}
                <span className="font-medium">2023</span>. I'm currently exploring{" "}
                <span className="font-medium">
                    blockchain development, system architecture patterns, SSIS, React, and Next.js
                </span>{" "}
                while looking for a{" "}
                <span className="font-medium">full-time position</span> as a{" "}
                <span className="font-medium">Software Engineer</span>.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I escape into{" "}
                <span className="font-medium">
                    video games, cinematic worlds, charcoal sketching, books on trading
                </span>
                , and{" "}
                <span className="font-medium">the occasional melody on the keyboard</span>.
            </p>
        </motion.section>
    );
}
