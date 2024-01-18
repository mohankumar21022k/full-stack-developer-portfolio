"use client";

import React from 'react'
import SectionHeading from './section-heading'
import Image from "next/image";
import { motion } from 'framer-motion';
import { certificationsData } from '@/lib/data';

const Card = ({ item }: any) => {
  return (
    <motion.div
      whileHover={{
        scale: 2.5,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.95,
      }}

      layoutId={`card-${item.id}`}
      className="group inline-block w-full mb-4  bg-base-100 shadow-xl image-full cursor-pointer">
      <Image src={item.imageUrl} 
        alt='my certificates' 
        className='transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40' />
    </motion.div>
  );
};

export default function Certificate() {
  return (
    <>
      <SectionHeading>My Certification</SectionHeading>
      <div className='scroll-mt-28 sm:w-[1050px] mb-28 sm:mb-40'>
        <div className="columns-2 md:columns-3 xl:columns-4 gap-4">
          {certificationsData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}
