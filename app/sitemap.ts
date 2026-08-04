import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/teacher`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/free-class`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/admission`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ssc`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hsc`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/legal/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/legal/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/legal/refund`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
