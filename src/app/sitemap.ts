import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/#categorias`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/#sobre`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/#contato`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
