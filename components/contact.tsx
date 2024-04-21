"use client";

import React, { useCallback, useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

function usePending() {
  const isPendingRef = useRef(false);

  const setIsPending = useCallback((value: boolean) => {
    isPendingRef.current = value;
  }, []);

  return [isPendingRef, setIsPending];
}

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isPending, setIsPending] = useState(false);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:damianbartosiakk@gmail.com">
          bartosiak.contact@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (event) => {
          event?.preventDefault();
          const formData = new FormData(event.currentTarget as HTMLFormElement);
          try {
            setIsPending(true);
            const { data, error } = await sendEmail(formData);
            setIsPending(false);
            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          } catch {
            toast.error("Something went wrong. Please try again later.");
          }
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn isPending={isPending} />
      </form>
    </motion.section>
  );
}
