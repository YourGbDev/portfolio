"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { sectionContainerVariants, contentBlockVariants } from "@/lib/motion";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? undefined : sectionContainerVariants}
      className="w-full space-y-3.5 select-none mb-16"
      aria-label="About"
    >
      <SectionHeader label="ABOUT" className="mb-3" />

      <motion.div
        variants={shouldReduceMotion ? undefined : contentBlockVariants}
        className="font-sans text-[15px] text-muted-foreground leading-[26px] space-y-4"
      >
        <p>
          I&apos;m <span className="text-ink font-medium">Gilbert Bulado</span>, an IT student and full-stack developer who enjoys turning ideas into practical web and mobile applications with clean interfaces, thoughtful user experiences, and reliable functionality.
        </p>

        <p>
          Most of my work comes from building real projects — from point-of-sale systems and scholarship-matching platforms to environmental monitoring tools and public API concepts. I&apos;m especially interested in <span className="text-ink font-medium">full-stack engineering</span>, <span className="text-ink font-medium">mobile app development</span>, <span className="text-ink font-medium">REST API design</span>, and learning how real software systems are designed, connected, and improved over time.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;