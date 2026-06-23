import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { servicePages } from "@/lib/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ispartaguzellikmerkezi.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ispartaguzellikmerkezi.com/blog",
      lastModified: new Date("2026-06-21"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://ispartaguzellikmerkezi.com/hizmetler",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...servicePages.map((service) => ({
      url: `https://ispartaguzellikmerkezi.com/hizmetler/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `https://ispartaguzellikmerkezi.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
