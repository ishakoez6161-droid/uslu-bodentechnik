import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import BlogCard from "@/components/blog-card";
import { LinkButton } from "@/components/button";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Ratgeber & Blog – Estrich, Fußbodenheizung & Sanierung",
  description:
    "Praxiswissen vom Estrich-Fachbetrieb aus Bergkamen: Tipps zu Estricharten, Trocknungszeiten, Fußbodenheizung, Kosten und Sanierung – verständlich erklärt von USLU Estrich & Bodentechnik.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Ratgeber & Blog | USLU Estrich & Bodentechnik",
    description:
      "Tipps und Wissen rund um Estrich, Fußbodenheizung und Haussanierung vom Fachbetrieb aus Bergkamen.",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const base = "https://www.uslu-estrich.de";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${base}/blog#blog`,
    url: `${base}/blog`,
    name: `Ratgeber | ${site.name}`,
    inLanguage: "de-DE",
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${base}/images/logo.jpeg` },
    },
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${base}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      ...(p.image ? { image: p.image } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Ratgeber"
        title="Wissen rund um Estrich & Boden."
        subtitle="Tipps, Kosten, Trocknungszeiten und Erfahrungen aus 20 Jahren Praxis – verständlich erklärt."
        image="/images/gallery/fussbodenheizung-tackersystem.jpeg"
      />

      <section className="relative bg-stone py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Aktuelle Artikel"
            title="Aus unserem Ratgeber."
            subtitle="Antworten auf die Fragen, die uns Bauherren und Sanierer am häufigsten stellen."
          />

          {posts.length > 0 ? (
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="mx-auto mt-16 max-w-xl text-center text-ink/60">
              Die ersten Ratgeber-Artikel erscheinen in Kürze. Sie haben schon jetzt eine
              Frage zu Ihrem Projekt? Wir beraten Sie gern persönlich.
            </p>
          )}

          <div className="mt-16 flex justify-center">
            <LinkButton href="/kontakt" variant="primary">
              Kostenlose Beratung anfragen
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
