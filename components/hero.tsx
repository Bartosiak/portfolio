"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 h-full max-w-[80rem] scroll-mt-[100rem]"
    >
      <div className="flex flex-col items-center justify-center sm:items-center sm:gap-5 md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="relative flex h-24 w-24 shrink-0 md:order-last md:h-[20rem] md:w-[20rem] xl:h-[30rem] xl:w-[30rem] "
        >
          <Image
            src="/header.png"
            alt="Picture of the author"
            quality="75"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            className="h-full w-full shrink-0 rotate-[-4deg] scale-x-[-1] transform rounded-full border-4 border-white md:rounded-full md:border-none"
          />
        </motion.div>
        <div className="relative flex h-1/2 flex-1 flex-col justify-center sm:justify-start ">
          <motion.h1
            className="mb-10 mt-4 px-4 text-3xl
                       font-medium !leading-[1.5] sm:text-2xl "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span>Hello, I am</span> <br></br>
            <span className="text-5xl md:text-6xl">Damian Bartosiak</span>{" "}
            <br></br>
            <span className="dark:bg-gradient-to-r dark:from-indigo-900 dark:to-sky-400 dark:bg-clip-text dark:text-transparent">
              Full-stack developer.
            </span>
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2 px-4 text-xs font-light sm:flex-row sm:text-lg sm:font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 sm:px-7 sm:py-3"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me{" "}
              <FaEnvelope className="shrink-0 opacity-70 transition group-hover:translate-x-1 sm:inline-block" />
            </Link>

            <a
              className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 text-center outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
              href="/portfolio-cv.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="flex shrink-0 opacity-60 transition group-hover:translate-y-1 sm:inline-block " />
            </a>

            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-3 text-center text-2xl text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-3 text-2xl text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
              href="https://github.com"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
