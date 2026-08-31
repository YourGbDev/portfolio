import React, { Suspense } from "react";
import type { Metadata } from "next";
import { TechStackClient } from "./TechStackClient";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Explore the cloud, DevOps, development, and database technologies used and currently being learned by Gilbert Bulado.",
  alternates: {
    canonical: `${SITE_URL}/tech-stack`,
  },
  openGraph: {
    title: "Tech Stack | Gilbert Bulado",
    description:
      "Explore the cloud, DevOps, development, and database technologies used and currently being learned by Gilbert Bulado.",
    url: `${SITE_URL}/tech-stack`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Stack | Gilbert Bulado",
    description:
      "Explore the cloud, DevOps, and development technologies used by Gilbert Bulado.",
  },
};

export default function TechStackPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full py-12 flex justify-center items-center text-muted-foreground font-mono text-xs">
          Loading tech stack...
        </div>
      }
    >
      <TechStackClient />
    </Suspense>
  );
}
