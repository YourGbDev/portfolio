import type { Metadata } from "next";
import { CloudProjectsClient } from "@/app/projects/CloudProjectsClient";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Cloud & DevOps Projects",
  description:
    "The planned Cloud/DevOps learning roadmap by Gilbert Bulado — five sequenced builds covering infrastructure as code, CI/CD automation, cloud-native applications, observability, and cloud security. Not yet built.",
  alternates: {
    canonical: `${SITE_URL}/projects/cloud`,
  },
  openGraph: {
    title: "Cloud & DevOps Projects | Gilbert Bulado",
    description:
      "The planned Cloud/DevOps learning roadmap by Gilbert Bulado — infrastructure as code, CI/CD automation, cloud-native applications, observability, and cloud security.",
    url: `${SITE_URL}/projects/cloud`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud & DevOps Projects | Gilbert Bulado",
    description:
      "The planned Cloud/DevOps learning roadmap by Gilbert Bulado — infrastructure as code, CI/CD automation, cloud-native applications, observability, and cloud security.",
  },
};

export default function CloudProjectsPage() {
  return <CloudProjectsClient />;
}
