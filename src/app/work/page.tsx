import type { Metadata } from "next";
import { WorkClient } from "./WorkClient";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Work & Experience",
  description:
    "Explore Gilbert Bulado's background — full-stack developer expanding into Cloud & DevOps, actively learning AWS, Linux, Docker, and CI/CD.",
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    title: "Work & Experience | Gilbert Bulado",
    description:
      "Explore Gilbert Bulado's background — full-stack developer expanding into Cloud & DevOps.",
    url: `${SITE_URL}/work`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Experience | Gilbert Bulado",
    description:
      "Explore Gilbert Bulado's background — full-stack developer expanding into Cloud & DevOps.",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
