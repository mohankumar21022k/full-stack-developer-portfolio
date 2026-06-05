"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaAward, FaMedal, FaStar } from "react-icons/fa";
import { HiBuildingOffice2, HiMagnifyingGlassPlus, HiXMark } from "react-icons/hi2";
import SectionHeading from "./section-heading";
import { honorsAndAwardsitems } from "@/lib/data";
import { useSectionInview } from "@/lib/hooks";

const badgeIcons = [FaTrophy, FaAward, FaMedal, FaStar];

type HonorItem = (typeof honorsAndAwardsitems)[number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

export default function Honors() {
  const { ref } = useSectionInview("Honors", 0.3);
  const [selected, setSelected] = useState<HonorItem | null>(null);

  // Close the lightbox on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <motion.section
      ref={ref}
      id="honors"
      className="scroll-mt-28 mb-28 w-full max-w-[60rem] sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Accolades</SectionHeading>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {honorsAndAwardsitems.map((item, index) => {
          const Icon = badgeIcons[index % badgeIcons.length];

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full"
            >
              {/* Gradient border frame */}
              <div
                className="h-full rounded-2xl bg-gradient-to-br from-amber-300 via-rose-300 to-fuchsia-400
                  p-[1.5px] shadow-lg shadow-black/[0.06] transition-all duration-300
                  group-hover:shadow-xl group-hover:shadow-amber-300/30
                  dark:from-amber-400/70 dark:via-rose-400/60 dark:to-fuchsia-500/70 dark:shadow-black/40"
              >
                <div
                  className="flex h-full flex-col overflow-hidden rounded-2xl bg-white
                    dark:bg-gray-900"
                >
                  {/* Award image — click to enlarge */}
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    aria-label={`Enlarge ${item.title} award image`}
                    className="relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden
                      bg-gradient-to-br from-gray-50 to-gray-100 outline-none
                      focus-visible:ring-2 focus-visible:ring-amber-400 dark:from-gray-800 dark:to-gray-900"
                  >
                    <Image
                      src={item.url}
                      alt={`${item.title} — ${item.at}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-3 transition-transform duration-500 ease-out
                        group-hover:scale-105"
                    />

                    {/* Hover affordance: dim overlay + zoom hint */}
                    <span
                      className="pointer-events-none absolute inset-0 flex flex-col items-center
                        justify-center gap-1.5 bg-gray-900/0 opacity-0 transition-all duration-300
                        group-hover:bg-gray-900/45 group-hover:opacity-100"
                    >
                      <HiMagnifyingGlassPlus className="h-7 w-7 text-white drop-shadow" />
                      <span className="text-xs font-medium uppercase tracking-wider text-white drop-shadow">
                        Click to enlarge
                      </span>
                    </span>

                    {/* Floating award badge */}
                    <span
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center
                        rounded-full bg-gradient-to-br from-amber-400 to-rose-500 text-white shadow-md
                        transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </button>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="text-base font-semibold leading-snug text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <span
                      className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gray-100 px-2.5
                        py-1 text-[0.7rem] font-medium uppercase tracking-wider text-gray-600
                        dark:bg-white/10 dark:text-white/70"
                    >
                      <HiBuildingOffice2 className="h-3 w-3" />
                      {item.at}
                    </span>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-white/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            aria-modal="true"
            role="dialog"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm" />

            {/* Dialog */}
            <motion.div
              className="relative z-10 flex max-h-full w-full max-w-4xl flex-col overflow-hidden
                rounded-2xl bg-white shadow-2xl dark:bg-gray-900"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center
                  rounded-full bg-gray-900/60 text-white backdrop-blur transition-colors
                  hover:bg-gray-900/80 focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-amber-400"
              >
                <HiXMark className="h-5 w-5" />
              </button>

              {/* Large, readable image */}
              <div
                className="relative h-[55vh] w-full bg-gradient-to-br from-gray-50 to-gray-100
                  sm:h-[65vh] dark:from-gray-800 dark:to-gray-950"
              >
                <Image
                  src={selected.url}
                  alt={`${selected.title} — ${selected.at}`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  quality={95}
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="flex flex-col gap-2 border-t border-gray-100 p-5 dark:border-white/10">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selected.title}
                  </h3>
                  <span
                    className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gray-100 px-2.5
                      py-1 text-[0.7rem] font-medium uppercase tracking-wider text-gray-600
                      dark:bg-white/10 dark:text-white/70"
                  >
                    <HiBuildingOffice2 className="h-3 w-3" />
                    {selected.at}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
