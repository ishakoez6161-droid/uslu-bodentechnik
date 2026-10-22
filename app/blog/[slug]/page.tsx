/* eslint-disable @next/next/no-img-element -- Artikelbilder kommen von externen Soro-Hosts */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/blog-card";
import { LinkButton } from "@/components/button";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";

export const revalidate = 300;
// Neue Artikel, die nach dem Build in Soro veröffentlicht werden, on-demand rendern.
export const dynamicParams = true;

const base = "https://www.uslu-estrich.de";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Artikel nicht gefunden", robots: { index: false } };

  const url = `/blog/${post.slug}`;
  const images = post.image ? [{ url: post.image, alt: post.imageAlt }] : ["/images/construction-site.jpeg"];

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    authors: [{ name: post.author || site.name }],
    keywords: post.categories.length ? post.categories : undefined,
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      locale: "de_DE",
      siteName: site.name,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author || site.name],
      tags: post.categories,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getPost(slug), getAllPosts()]);
  if (!post) notFound();

  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${base}/blog/${post.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: post.title,
      description: post.description,
      inLanguage: "de-DE",
      ...(post.image ? { image: [post.image] } : {}),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: post.author
        ? { "@type": "Person", name: post.author }
        : { "@type": "Organization", name: site.name, url: base },
      publisher: {
        "@type": "Organization",
        name: site.name,
        url: base,
        logo: { "@type": "ImageObject", url: `${base}/images/logo.jpeg` },
      },
      isPartOf: { "@id": `${base}/blog#blog` },
      ...(post.categories.length ? { keywords: post.categories.join(", ") } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${base}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="relative overflow-hidden bg-ink pt-36 pb-16">
          {post.image && (
            <img
              src={post.image}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
          <div className="relative mx-auto max-w-3xl px-6">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">Startseite</Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="hover:text-white">Ratgeber</Link>
                </li>
              </ol>
            </nav>
            <h1 className="font-display text-4xl leading-[1.1] text-white sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/60">
              <span>{post.author || site.name}</span>
              {post.publishedAt && (
                <>
                  <span aria-hidden>·</span>
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </>
              )}
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} Min. Lesezeit</span>
            </div>
          </div>
        </header>

        <div className="bg-paper py-16">
          <div className="mx-auto max-w-3xl px-6">
            {post.image && (
              <figure className="-mt-28 mb-12 overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(14,13,12,0.25)]">
                <img
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  fetchPriority="high"
                  className="aspect-[16/9] w-full object-cover"
                />
              </figure>
            )}

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <aside className="mt-16 rounded-3xl bg-ink p-8 text-white sm:p-10">
              <h2 className="font-display text-2xl sm:text-3xl">
                Projekt geplant? Wir beraten Sie kostenlos.
              </h2>
              <p className="mt-3 text-white/65">
                {site.name} aus Bergkamen – 20 Jahre Erfahrung mit Estrich, Fußbodenheizung
                und Sanierung. Rufen Sie an unter{" "}
                <a href={site.phoneHref} className="text-gold-light underline-offset-4 hover:underline">
                  {site.phones[0]}
                </a>{" "}
                oder schreiben Sie uns.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton href="/kontakt" variant="primary">
                  Angebot anfragen
                </LinkButton>
                <LinkButton href={site.whatsappHref} target="_blank" variant="ghost-dark">
                  WhatsApp
                </LinkButton>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-stone py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Weitere Ratgeber-Artikel</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
