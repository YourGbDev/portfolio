"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cloudJourney } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import {
  sectionContainerVariants,
  staggeredGridVariants,
  gridItemVariants,
  contentBlockVariants,
} from "@/lib/motion";

const STATUS_META: Record<
  string,
  { label: string; dotClass: string; badgeClass: string }
> = {
  current: {
    label: "LEARNING NOW",
    dotClass: "bg-emerald-500 dark:bg-emerald-400",
    badgeClass:
      "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  next: {
    label: "NEXT",
    dotClass: "bg-cyan-500",
    badgeClass: "text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  planned: {
    label: "PLANNED",
    dotClass: "bg-violet-500 dark:bg-violet-400",
    badgeClass:
      "text-violet-500 dark:text-violet-300 bg-violet-500/10 border-violet-500/20",
  },
};

export function CloudJourney() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      variants={shouldReduceMotion ? undefined : sectionContainerVariants}
      className="w-full space-y-5 select-none mb-16"
      aria-label="Cloud Journey"
    >
      <SectionHeader
        label="CLOUD-JOURNEY"
        description="My current learning progression into Cloud & DevOps — honestly marked as I go."
        className="mb-5 pb-2 border-b border-border-hairline/40"
      />

      <motion.div
        variants={shouldReduceMotion ? undefined : staggeredGridVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {cloudJourney.map((stage) => {
          const meta = STATUS_META[stage.status];

          return (
            <motion.div
              key={stage.label}
              variants={shouldReduceMotion ? undefined : gridItemVariants}
              className="p-4 sm:p-4.5 rounded-xl bg-surface/30 border border-border-hairline hover:bg-surface/60 hover:border-border-hairline transition-all duration-200 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-sans text-sm font-semibold text-ink tracking-tight">
                    {stage.label}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border ${meta.badgeClass}`}
                  >
                    <span
                      className={`relative flex h-1.5 w-1.5 ${meta.dotClass} rounded-full`}
                    />
                    {meta.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {stage.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-muted-subtle border border-border-hairline text-muted-foreground text-[11px] font-sans font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-sans text-xs text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border-hairline/40">
                {stage.note}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? undefined : contentBlockVariants}
        className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground"
      >
        <div className="border-l-2 border-border-hairline pl-3 italic text-muted-foreground/90">
          Future stages are learning goals, not claimed experience.
        </div>
        <span className="font-mono text-[11px] text-muted-foreground/60 tracking-wider font-medium sm:text-right">
          Developer → Cloud-aware → Cloud/DevOps
        </span>
      </motion.div>
    </motion.section>
  );
}

export default CloudJourney;
