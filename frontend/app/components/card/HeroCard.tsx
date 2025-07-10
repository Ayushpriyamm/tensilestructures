"use client";

import { motion } from "framer-motion";
import React from "react";

export interface HeroCardInterface{
    heading:string,
    subheading:string

    bgImg:string
}
export default function HeroCard({heading,subheading,bgImg}:HeroCardInterface) {
  return (
    <motion.div
      className="relative bg-cover bg-center p-10 shadow-2xl overflow-hidden "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs z-0" />

      {/* Text Content with Animation */}
      <motion.div
        className="relative z-10 flex flex-col text-center text-white px-4 py-10 sm:px-8 sm:py-16 space-y-2 sm:space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="text-2xl sm:text-5xl font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          {heading}
        </motion.h1>

        <motion.h2
          className="text-md sm:text-lg font-medium text-gray-200"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          {subheading}
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}
