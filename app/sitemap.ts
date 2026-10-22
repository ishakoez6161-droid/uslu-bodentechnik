import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.uslu-estrich.de";
  const routes = ["", "/ueber-uns", "/galerie", "/blog", "/kontakt", "/datenschutz", "/impressum"];
  const posts = await getAllPosts();

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.6,
  }));

  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt || new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
    ...(post.image ? { images: [post.image] } : {}),
  }));

  return [...pages, ...articles];
}
