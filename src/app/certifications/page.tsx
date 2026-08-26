import type { Metadata } from "next";
import { CertificationsClient } from "./CertificationsClient";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Explore the verified professional credentials and technology certifications earned by Gilbert Bulado.",
  alternates: {
    canonical: `${SITE_URL}/certifications`,
  },
  openGraph: {
    title: "Certifications | Gilbert Bulado",
    description:
      "Explore the verified professional credentials and technology certifications earned by Gilbert Bulado.",
    url: `${SITE_URL}/certifications`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | Gilbert Bulado",
    description:
      "Explore the verified professional credentials and certificates earned by Gilbert Bulado.",
  },
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
