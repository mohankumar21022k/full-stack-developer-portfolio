"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { educationData } from "@/lib/data";
import { useSectionInview } from "@/lib/hooks";

export default function Education() {
    const { ref } = useSectionInview("Education");

    return (
        <motion.section id="education" ref={ref} 
            className="scroll-mt-28 sm:w-[1050px] mb-28 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}>
            <SectionHeading>Education</SectionHeading>
            <VerticalTimeline lineColor="">
                {educationData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                visibility: "visible"
                            }}
                            contentArrowStyle={{
                                visibility: "visible",
                                borderRight: "0.4rem solid #9ca3af",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "white",
                                fontSize: "1.5rem",
                                visibility: "visible"
                            }}
                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-grey/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </motion.section>
    );
}