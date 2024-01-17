"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import portraitImg from '@/../public/MohanKumarA-Portrait.jpg'
import { useSectionInview } from "@/lib/hooks";

export default function Intro() {
    const { ref } = useSectionInview("Home");

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}>
                        <Image src={portraitImg}
                            alt="Mohan Portrait"
                            width="198"
                            height="198"
                            quality="95"
                            priority={true}
                            className="h-[10rem] w-[10rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span className="absolute bottom-0 right-0 text-6xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}>
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I'm Mohan.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">two and half years</span> of experience. 
                I enjoy building <span className="italic">sites & apps</span>.
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}>
                <Link href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                    focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/MohanKumarA-Resume.pdf"
                    download>
                    Download Resume{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] 
                    hover:scale-[1.15] active:scale-105 transition cursor-pointer border dark:bg-white/10"
                    href="https://www.linkedin.com/in/mohan-kumar-a-5913a1202/"
                    target="_blank">
                    <BsLinkedin />
                </a>

                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] 
                    hover:scale-[1.15] active:scale-105 transition cursor-pointer border dark:bg-white/10"
                    href="https://github.com/mohankumar21022k"
                    target="_blank">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
