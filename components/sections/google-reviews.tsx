import SectionHeading from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/motion-primitives";
import { LinkButton } from "@/components/button";
import { getGoogleReviews, googleReviewsUrl } from "@/lib/google-reviews";

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating.toLocaleString("de-DE")} von 5 Sternen`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className={`relative inline-block ${className}`}>
            <svg viewBox="0 0 20 20" className="absolute inset-0 h-full w-full text-ink/15" fill="currentColor">
              <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
            </svg>
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <svg viewBox="0 0 20 20" className={`${className} text-[#fbbc04]`} fill="currentColor">
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z" />
    </svg>
  );
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();

  return (
    <section className="relative bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Google-Bewertungen"
          title="Das sagen unsere Kunden."
          subtitle={
            data
              ? undefined
              : "Lesen Sie die Erfahrungen unserer Kunden direkt in unserem Google-Unternehmensprofil."
          }
        />

        {data && (
          <>
            <Reveal className="mt-12 flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <GoogleLogo />
                <span className="font-display text-5xl text-ink">
                  {data.rating.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                </span>
                <Stars rating={data.rating} className="h-6 w-6" />
              </div>
              <p className="text-sm text-ink/55">
                Basierend auf {data.total.toLocaleString("de-DE")}{" "}
                {data.total === 1 ? "Bewertung" : "Bewertungen"} bei Google
              </p>
            </Reveal>

            {data.reviews.length > 0 && (
              <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.reviews.map((review) => (
                  <Reveal
                    key={`${review.author}-${review.publishTime ?? review.relativeTime}`}
                    className="flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-7 shadow-[0_10px_40px_rgba(20,15,10,0.06)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Stars rating={review.rating} />
                      <GoogleLogo />
                    </div>
                    {review.text && (
                      <p className="mt-4 line-clamp-6 flex-1 text-[0.95rem] leading-relaxed text-ink/70">
                        &bdquo;{review.text}&ldquo;
                      </p>
                    )}
                    <div className="mt-6 border-t border-ink/8 pt-4">
                      {review.authorUrl ? (
                        <a
                          href={review.authorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-ink hover:text-gold-deep"
                        >
                          {review.author}
                        </a>
                      ) : (
                        <span className="font-medium text-ink">{review.author}</span>
                      )}
                      {review.relativeTime && (
                        <div className="text-xs text-ink/45">{review.relativeTime}</div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </RevealGroup>
            )}
          </>
        )}

        <Reveal className="mt-12 flex flex-col items-center gap-3">
          <LinkButton href={googleReviewsUrl} target="_blank" variant="primary">
            Alle Bewertungen ansehen
          </LinkButton>
          {data && <p className="text-xs text-ink/40">Bewertungen bereitgestellt von Google</p>}
        </Reveal>
      </div>
    </section>
  );
}
