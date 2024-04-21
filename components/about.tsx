"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-[8rem] max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 md:text-lg">
        My experience gained from tennis training as a player has forged in me
        the realization that achieving excellence requires daily effort and
        continuous improvement. I now translate this knowledge into the field of
        programming, where each day allows me to expand my skills and get closer
        to achieving my goals. In addition, I derive great satisfaction from
        working on my e-commerce online store project, where I combine my
        passion for programming with creating practical business solutions. I
        intend to continue to develop this project, aiming for even greater
        functionality.
        <span className="font-medium">
          {" "}
          I am a graduate of the course Full Stack MERN Developer{" "}
        </span>
        where I gained a comprehensive knowledge of web application development
        from front-end to back-end. This intensive course has enriched my skills
        and prepared me for the challenges of working in the IT industry. In
        addition, I am enthusiastic about the opportunity to influence the
        success of the company where I will be working, to jointly create
        innovative and inspiring solutions.
      </p>
    </motion.section>
  );
}
