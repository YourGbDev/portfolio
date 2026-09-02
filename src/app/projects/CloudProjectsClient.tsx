"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cloudDevOpsRoadmap } from "@/lib/data";
import { CloudRoadmap } from "@/components/CloudRoadmap";
import { useUISound } from "@/context/SoundContext";

export function CloudProjectsClient() {
  const { playHover, playClick } = useUISound();

  return (
    <div className="w-full select-none">
      {/* Page Header */}
      <div className="mb-10 space-y-2">
        <Link
          href="/"
          onMouseEnter={playHover}
          onClick={playClick}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-ink transition-colors duration-150 mb-2 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>cd .. / home</span>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
              Cloud &amp; DevOps
            </h1>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              {"// Planned roadmap builds — Build → Automate → Deploy → Observe → Secure"}
            </p>
          </div>
          <span className="font-mono text-xs text-muted-foreground bg-muted-subtle px-2.5 py-1 rounded border border-border-hairline">
            {cloudDevOpsRoadmap.length} builds
          </span>
        </div>
      </div>

      {/* Cloud & DevOps Project Roadmap (Planned Builds) */}
      <CloudRoadmap />
    </div>
  );
}

export default CloudProjectsClient;
