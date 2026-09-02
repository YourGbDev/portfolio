import type { Metadata } from "next";
import { ProjectsPageClient } from "@/app/projects/ProjectsPageClient";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Software Projects",
  description:
    "Explore the software engineering applications built by Gilbert Bulado — point-of-sale systems, ed-tech platforms, monitoring tools, public APIs, and more.",
  alternates: {
    canonical: `${SITE_URL}/projects/software`,
  },
  openGraph: {
    title: "Software Projects | Gilbert Bulado",
    description:
      "Explore the software engineering applications built by Gilbert Bulado — point-of-sale systems, ed-tech platforms, monitoring tools, public APIs, and more.",
    url: `${SITE_URL}/projects/software`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Projects | Gilbert Bulado",
    description:
      "Explore the software engineering applications built by Gilbert Bulado — point-of-sale systems, ed-tech platforms, monitoring tools, public APIs, and more.",
  },
};

export default function SoftwareProjectsPage() {
  return <ProjectsPageClient />;
}
