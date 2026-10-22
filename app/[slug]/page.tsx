import { notFound, permanentRedirect } from "next/navigation";
import { getAllPosts } from "@/lib/blog";

/**
 * Soro verlinkt Artikel als www.uslu-estrich.de/<slug> (z. B. in Social-Posts).
 * Diese Adressen leiten dauerhaft (308) auf /blog/<slug> weiter, damit es nur
 * eine kanonische URL pro Artikel gibt. Unbekannte Pfade bleiben 404.
 * Feste Seiten (/kontakt, /galerie …) haben Vorrang vor dieser Route.
 */
export const revalidate = 300;
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export default async function SoroSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Nur gecachter Feed: unbekannte Pfade lösen keine zusätzlichen Feed-Abrufe aus.
  const post = (await getAllPosts()).find((p) => p.slug === slug);
  if (!post) notFound();
  permanentRedirect(`/blog/${post.slug}`);
}
