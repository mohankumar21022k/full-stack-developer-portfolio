"use client";

import React from 'react'
import Certificate from './certificate';
import { useSectionInview } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Certifications() {
  const { ref } = useSectionInview("Certifications", 0.75);

  return (
    <motion.section ref={ref} 
      id="certifications"
      className="scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}>
      <Certificate />
    </motion.section>
  );
}
