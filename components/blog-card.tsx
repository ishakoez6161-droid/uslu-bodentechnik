/* eslint-disable @next/next/no-img-element -- Artikelbilder kommen von externen Soro-Hosts */
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-[0_10px_40px_rgba(14,13,12,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(14,13,12,0.12)]">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-stone-dark">
        {post.image ? (
          <img
            src={post.image}
            alt={post.imageAlt ?? post.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <img
            src="/images/construction-site.jpeg"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.16em] text-gold-deep">
          {post.publishedAt && <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>}
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} Min. Lesezeit</span>
        </div>
        <h2 className="font-display text-2xl leading-snug text-ink">
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold-deep">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/60">{post.description}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-gold-deep"
          aria-label={`Weiterlesen: ${post.title}`}
        >
          Weiterlesen <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
