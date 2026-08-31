import type { Metadata } from "next";
import { ProjectsPageClient } from "@/app/projects/ProjectsPageClient";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the applications built by Gilbert Bulado — point-of-sale systems, ed-tech platforms, monitoring tools, public APIs, and more.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Projects | Gilbert Bulado",
    description:
      "Explore the applications built by Gilbert Bulado — point-of-sale systems, ed-tech platforms, monitoring tools, and more.",
    url: `${SITE_URL}/projects`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Gilbert Bulado",
    description:
      "Explore the applications built by Gilbert Bulado — point-of-sale systems, ed-tech platforms, monitoring tools, and more.",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
