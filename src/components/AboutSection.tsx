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
          I&apos;m <span className="text-ink font-medium">Gilbert Bulado</span>, an IT student and full-stack developer currently expanding into Cloud &amp; DevOps. I started by building software — point-of-sale systems, scholarship-matching platforms, environmental monitoring tools, and public API concepts — and I&apos;m now learning how those applications are <span className="text-ink font-medium">deployed, secured, automated, monitored, and operated</span>.
        </p>

        <p>
          I&apos;m actively learning <span className="text-ink font-medium">AWS</span>, <span className="text-ink font-medium">Linux</span>, <span className="text-ink font-medium">cloud infrastructure</span>, <span className="text-ink font-medium">Docker</span>, <span className="text-ink font-medium">CI/CD</span>, and <span className="text-ink font-medium">Infrastructure as Code</span> — building on my background in <span className="text-ink font-medium">full-stack engineering</span>, <span className="text-ink font-medium">mobile app development</span>, and <span className="text-ink font-medium">REST API design</span>. My long-term goal is to understand software systems end-to-end: from interface to infrastructure.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;