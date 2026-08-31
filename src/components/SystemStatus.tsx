"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { systemStatus } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";
import {
  sectionContainerVariants,
  staggeredGridVariants,
  gridItemVariants,
  contentBlockVariants,
} from "@/lib/motion";

const STATUS_META: Record<
  string,
  { textClass: string; dotClass: string; label: string }
> = {
  LEARNING: {
    textClass: "text-amber-500 dark:text-amber-400",
    dotClass: "bg-amber-500",
    label: "learning",
  },
  ACTIVE: {
    textClass: "text-emerald-500 dark:text-emerald-400",
    dotClass: "bg-emerald-500",
    label: "active",
  },
  NEXT: {
    textClass: "text-cyan-500 dark:text-cyan-400",
    dotClass: "bg-cyan-500",
    label: "next",
  },
  PLANNED: {
    textClass: "text-violet-500 dark:text-violet-400",
    dotClass: "bg-violet-500",
    label: "planned",
  },
  BUILDING: {
    textClass: "text-sky-500 dark:text-sky-400",
    dotClass: "bg-sky-500",
    label: "building",
  },
};

export function SystemStatus() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      variants={shouldReduceMotion ? undefined : sectionContainerVariants}
      className="w-full space-y-5 select-none mb-16"
      aria-label="DevOps Learning Status"
    >
      <SectionHeader
        label="SYSTEM-STATUS"
        description="A terminal-style snapshot of my Cloud & DevOps learning state — a portfolio representation, not a live production dashboard."
        className="mb-5 pb-2 border-b border-border-hairline/40"
      />

      <motion.div
        variants={shouldReduceMotion ? undefined : staggeredGridVariants}
        className="rounded-lg bg-surface/30 border border-border-hairline overflow-hidden shadow-2xs"
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-border-hairline/40 bg-muted-subtle/60">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="font-mono text-[11px] text-muted-foreground ml-2">
            systemctl status --learning
          </span>
        </div>

        {/* Status Rows */}
        <div className="p-3 sm:p-4 space-y-1.5">
          {systemStatus.map((item) => {
            const meta = STATUS_META[item.status];
            return (
              <motion.div
                key={item.service}
                variants={shouldReduceMotion ? undefined : gridItemVariants}
                className="flex items-center justify-between gap-3 px-2.5 py-1.5 rounded-[4px] hover:bg-surface/50 transition-colors"
              >
                <span className="flex items-center gap-2.5 font-mono text-xs text-ink min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0">
                    <span className={`block w-1.5 h-1.5 rounded-full ${meta.dotClass}`} />
                  </span>
                  <span className="truncate">{item.service}</span>
                </span>
                <span
                  className={`font-mono text-[10px] font-semibold tracking-wider uppercase flex-shrink-0 ${meta.textClass}`}
                >
                  {meta.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? undefined : contentBlockVariants}
        className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground"
      >
        <div className="border-l-2 border-border-hairline pl-3 italic text-muted-foreground/90">
          STATUS = honest learning progress, not claimed production expertise.
        </div>
        <span className="font-mono text-[11px] text-muted-foreground/60 tracking-wider font-medium sm:text-right">
          $ AWS · Linux · Docker · CI/CD
        </span>
      </motion.div>
    </motion.section>
  );
}

export default SystemStatus;
