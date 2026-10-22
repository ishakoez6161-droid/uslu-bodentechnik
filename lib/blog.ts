import "server-only";
import { XMLParser } from "fast-xml-parser";

/**
 * Blog-Artikel kommen aus Soro (app.trysoro.com) über den RSS-Feed.
 * Die Artikel werden serverseitig geladen und als normales HTML unter
 * www.uslu-estrich.de/blog/<slug> ausgeliefert (eigene Domain, voll indexierbar).
 * Neue Artikel erscheinen spätestens nach REVALIDATE_SECONDS automatisch.
 */
const FEED_URL =
  process.env.SORO_RSS_URL ||
  "https://app.trysoro.com/api/rss/0b8e357e-31d3-4831-9d57-ec97a4559666";

export const REVALIDATE_SECONDS = 60 * 30; // 30 Minuten

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  contentHtml: string;
  image?: string;
  imageAlt?: string;
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  categories: string[];
  readingMinutes: number;
};

type RssItem = Record<string, unknown>;

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  trimValues: true,
  processEntities: true,
  htmlEntities: true,
});

function text(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value).trim();
  if (Array.isArray(value)) return text(value[0]);
  if (typeof value === "object") {
    const v = value as Record<string, unknown>;
    if ("#text" in v) return text(v["#text"]);
    if ("__cdata" in v) return text(v["__cdata"]);
  }
  return "";
}

function toArray<T>(value: T | T[] | undefined): T[] {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function slugFromLink(link: string): string | null {
  try {
    const url = new URL(link);
    const last = url.pathname.split("/").filter(Boolean).pop();
    if (!last) return null;
    const cleaned = slugify(decodeURIComponent(last.replace(/\.html?$/, "")));
    return cleaned || null;
  } catch {
    return null;
  }
}

export function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(input: string, max = 158): string {
  if (input.length <= max) return input;
  const cut = input.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:–-]+$/, "")} …`;
}

/** Entfernt aktive Inhalte und doppelte H1 aus dem Artikel-HTML. */
function sanitizeContent(html: string): string {
  return (
    html
      .replace(/<(script|style|iframe|object|embed|form)[\s\S]*?<\/\1>/gi, "")
      .replace(/<(script|iframe|object|embed)[^>]*\/?>/gi, "")
      .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"')
      // Die Seite hat bereits eine H1 (Artikeltitel) – weitere H1 werden zu H2.
      .replace(/<h1(\s[^>]*)?>/gi, "<h2$1>")
      .replace(/<\/h1>/gi, "</h2>")
      // Bilder lazy laden
      .replace(/<img(?![^>]*\sloading=)/gi, '<img loading="lazy" decoding="async"')
      // Externe Links sicher öffnen
      .replace(
        /<a\s([^>]*href=["']https?:\/\/(?!(?:www\.)?uslu-estrich\.de)[^"']+["'][^>]*)>/gi,
        (match, attrs: string) =>
          /target=/.test(attrs) ? match : `<a ${attrs} target="_blank" rel="noopener">`,
      )
  );
}

function firstImageFromHtml(html: string): { src?: string; alt?: string } {
  const match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (!match) return {};
  const alt = match[0].match(/alt=["']([^"']*)["']/i)?.[1];
  return { src: match[1], alt };
}

function imageFromItem(item: RssItem, html: string): { src?: string; alt?: string } {
  const media = toArray(item["media:content"] as RssItem | RssItem[]);
  for (const m of media) {
    const url = text(m["@_url"]);
    if (url) return { src: url, alt: text(m["media:description"]) || text(m["media:title"]) };
  }
  const thumb = toArray(item["media:thumbnail"] as RssItem | RssItem[]);
  for (const t of thumb) {
    const url = text(t["@_url"]);
    if (url) return { src: url };
  }
  const enclosures = toArray(item.enclosure as RssItem | RssItem[]);
  for (const e of enclosures) {
    const url = text(e["@_url"]);
    const type = text(e["@_type"]);
    if (url && (!type || type.startsWith("image"))) return { src: url };
  }
  const image = text(item.image);
  if (image) return { src: image };
  return firstImageFromHtml(html);
}

function toIso(value: string): string | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

function normalizeItem(item: RssItem): BlogPost | null {
  const title = stripHtml(text(item.title));
  if (!title) return null;

  const rawContent =
    text(item["content:encoded"]) || text(item.content) || text(item.description);
  const rawDescription = text(item.description);
  const link = text(item.link) || text(item.guid);

  const slug = slugFromLink(link) || slugify(title);
  const contentHtml = sanitizeContent(rawContent);
  const plain = stripHtml(contentHtml);
  const description = truncate(
    stripHtml(rawDescription && rawDescription !== rawContent ? rawDescription : "") || plain,
  );
  const { src, alt } = imageFromItem(item, rawContent);

  const words = plain ? plain.split(/\s+/).length : 0;

  return {
    slug,
    title,
    description,
    contentHtml,
    image: src,
    imageAlt: alt || title,
    publishedAt: toIso(text(item.pubDate) || text(item["dc:date"])),
    updatedAt: toIso(text(item["atom:updated"]) || text(item.updated)),
    author: text(item["dc:creator"]) || text(item.author) || undefined,
    categories: toArray(item.category as unknown).map(text).filter(Boolean),
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["blog"] },
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    if (!xml.trim().startsWith("<")) return [];

    const data = parser.parse(xml) as { rss?: { channel?: { item?: RssItem | RssItem[] } } };
    const items = toArray(data.rss?.channel?.item);

    const seen = new Set<string>();
    return items
      .map(normalizeItem)
      .filter((p): p is BlogPost => {
        if (!p || seen.has(p.slug)) return false;
        seen.add(p.slug);
        return true;
      })
      .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function formatDate(iso?: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin",
  }).format(new Date(iso));
}
