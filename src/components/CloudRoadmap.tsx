"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cloudDevOpsRoadmap, fullProjects } from "@/lib/data";
import { TechIcon } from "./TechIcon";
import { SectionHeader } from "./SectionHeader";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { useUISound } from "@/context/SoundContext";
import {
  sectionContainerVariants,
  staggeredGridVariants,
  gridItemVariants,
  contentBlockVariants,
} from "@/lib/motion";

const STAGE_META: Record<
  string,
  { labelClass: string; dotClass: string }
> = {
  BUILD: {
    labelClass: "text-amber-500 dark:text-amber-400",
    dotClass: "bg-amber-500",
  },
  AUTOMATE: {
    labelClass: "text-cyan-500 dark:text-cyan-400",
    dotClass: "bg-cyan-500",
  },
  DEPLOY: {
    labelClass: "text-emerald-500 dark:text-emerald-400",
    dotClass: "bg-emerald-500",
  },
  OBSERVE: {
    labelClass: "text-sky-500 dark:text-sky-400",
    dotClass: "bg-sky-500",
  },
  SECURE: {
    labelClass: "text-rose-500 dark:text-rose-400",
    dotClass: "bg-rose-500",
  },
};

export function CloudRoadmap() {
  const shouldReduceMotion = useReducedMotion();
  const { playHover, playClick } = useUISound();

  const steps = cloudDevOpsRoadmap
    .map((step) => {
      const project = fullProjects.find((p) => p.slug === step.slug);
      return project ? { step, project } : null;
    })
    .filter(
      (entry): entry is NonNullable<typeof entry> => entry !== null
    );

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      variants={shouldReduceMotion ? undefined : sectionContainerVariants}
      className="w-full space-y-5 select-none mb-16"
      aria-label="Cloud & DevOps Project Roadmap"
    >
      <SectionHeader
        label="CLOUD-DEVOPS-ROADMAP"
        description="Five planned Cloud/DevOps learning builds, sequenced Build → Automate → Deploy → Observe → Secure. These are roadmap projects, not completed deployments."
        className="mb-5 pb-2 border-b border-border-hairline/40"
      />

      <motion.div
        variants={shouldReduceMotion ? undefined : staggeredGridVariants}
        className="space-y-2.5"
      >
        {steps.map(({ step, project }, idx) => {
          const meta = STAGE_META[step.stageLabel] || STAGE_META.BUILD;
          const isLast = idx === steps.length - 1;

          return (
            <motion.div
              key={step.slug}
              variants={shouldReduceMotion ? undefined : gridItemVariants}
              className="space-y-2.5"
            >
              <Link
                href={`/projects/${project.slug}`}
                onMouseEnter={playHover}
                onClick={playClick}
                className="cad-project-card group block cursor-pointer"
              >
                <div className="cad-reticle cad-reticle--tl" />
                <div className="cad-reticle cad-reticle--tr" />
                <div className="cad-reticle cad-reticle--bl" />
                <div className="cad-reticle cad-reticle--br" />

                <div className="flex items-start gap-3.5 sm:gap-4">
                  {/* Stage Number + Concept Label */}
                  <div className="flex flex-col items-center gap-1.5 flex-shrink-0 pt-0.5">
                    <span className="font-mono text-lg sm:text-xl font-bold text-ink/70 leading-none select-none">
                      {step.stage}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 font-mono text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded border bg-muted-subtle ${meta.labelClass}`}
                    >
                      <span className={`w-1 h-1 rounded-full ${meta.dotClass}`} />
                      {step.stageLabel}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="font-sans text-sm sm:text-[15px] font-semibold text-ink group-hover:text-brand transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.status && (
                          <ProjectStatusBadge status={project.status} size="sm" />
                        )}
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                      </div>
                    </div>

                    <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
                      {project.category} · {step.stageName}
                    </p>

                    <p className="font-sans text-xs text-muted-foreground/90 leading-relaxed mt-1.5 line-clamp-2">
                      {project.overview}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-2">
                      {project.tags.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] bg-muted-subtle border border-border-hairline text-muted-foreground text-[11px] font-sans font-medium"
                        >
                          <TechIcon name={tech} className="w-3 h-3 flex-shrink-0" />
                          <span>{tech}</span>
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] font-mono text-muted-foreground px-1">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Downward Connector */}
              {!isLast && (
                <div className="flex items-center justify-center py-0.5" aria-hidden="true">
                  <ArrowDown className="w-3.5 h-3.5 text-muted-foreground/50" />
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? undefined : contentBlockVariants}
        className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground"
      >
        <div className="border-l-2 border-border-hairline pl-3 italic text-muted-foreground/90">
          These are planned learning builds, not claimed AWS deployments, infrastructure, or production experience.
        </div>
        <span className="font-mono text-[11px] text-muted-foreground/60 tracking-wider font-medium sm:text-right">
          Build → Automate → Deploy → Observe → Secure
        </span>
      </motion.div>
    </motion.section>
  );
}

export default CloudRoadmap;
