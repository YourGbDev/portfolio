import type { Metadata } from "next";
import { CertificationsClient } from "./CertificationsClient";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Track the professional credentials and certifications earned by Gilbert Bulado — with AWS and DevOps certifications on the current roadmap.",
  alternates: {
    canonical: `${SITE_URL}/certifications`,
  },
  openGraph: {
    title: "Certifications | Gilbert Bulado",
    description:
      "Track the professional credentials and certifications earned by Gilbert Bulado — with AWS and DevOps certifications on the current roadmap.",
    url: `${SITE_URL}/certifications`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | Gilbert Bulado",
    description:
      "Track the professional credentials and certifications earned by Gilbert Bulado — with AWS and DevOps certifications on the current roadmap.",
  },
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
