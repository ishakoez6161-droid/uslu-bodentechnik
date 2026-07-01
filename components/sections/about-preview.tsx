import Image from "next/image";
import { Reveal } from "@/components/motion-primitives";
import { LinkButton } from "@/components/button";
import { site } from "@/lib/site";

const points = [
  "Persönliche Beratung durch Inhaber Ümit Uslu",
  "Feste, eingespielte Handwerkerteams",
  "Termintreue und transparente Kommunikation",
  "Saubere Baustellen, geprüfte Materialien",
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-paper py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(20,15,10,0.18)]">
            <Image
              src="/images/consulting-couple.jpeg"
              alt="Persönliche Beratung und gemeinsame Planung mit USLU Estrich & Bodentechnik"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>
          <div className="glass-light absolute -bottom-8 -right-6 hidden max-w-[15rem] rounded-2xl p-5 shadow-xl sm:block">
            <div className="font-display text-3xl text-ink">20</div>
            <div className="text-xs uppercase tracking-wide text-ink/60">
              Jahre Erfahrung im Handwerk
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Über uns
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Handwerk, dem Sie
              <span className="italic text-gradient-gold"> vertrauen </span>
              können.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/60">
              Unter der Leitung von {site.owner} steht{" "}
              {site.name} seit 20 Jahren für Präzision, Ehrlichkeit und
              Qualität im Handwerk. Über 500 Projekte in der Region belegen
              unser Versprechen: sauber, zuverlässig und termingerecht.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-8 space-y-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                    <path
                      d="M3 8.5 6.2 11.5 13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-ink/70">{point}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.32} className="mt-10">
            <LinkButton href="/ueber-uns" variant="ghost-light">
              Mehr über uns erfahren
            </LinkButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
