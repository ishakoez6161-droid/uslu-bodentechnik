import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/motion-primitives";
import { LinkButton } from "@/components/button";
import { site } from "@/lib/site";
import ValueCard from "./value-card";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie USLU Estrich & Bodentechnik kennen: 20 Jahre Erfahrung, 500+ Projekte und ein Team, das Handwerk mit Herz betreibt. Inhaber Ümit Uslu aus Bergkamen.",
};

const values = [
  {
    title: "Präzision",
    text: "Jeder Millimeter zählt. Wir arbeiten mit Sorgfalt und geprüften Materialien für Böden, die halten, was sie versprechen.",
  },
  {
    title: "Ehrlichkeit",
    text: "Klare Kommunikation, transparente Angebote und ein offenes Wort – auch wenn es mal unbequem ist.",
  },
  {
    title: "Zuverlässigkeit",
    text: "Vereinbarte Termine sind für uns verbindlich. Sie können sich auf unser Wort verlassen.",
  },
  {
    title: "Persönlich",
    text: "Wir sind ein inhabergeführter Betrieb – Ihr Ansprechpartner bleibt vom ersten Gespräch bis zur Übergabe derselbe.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ein Familienbetrieb mit Handwerk im Blut."
        subtitle="Seit 20 Jahren stehen wir für Estrich- und Bodentechnik, die überzeugt – gebaut auf Vertrauen, Erfahrung und ehrlicher Arbeit."
        image="/images/construction-site.jpeg"
      />

      <section className="relative overflow-hidden bg-paper py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal className="order-2 lg:order-1">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Unsere Geschichte
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Von der ersten Kelle bis zu 500+ Projekten.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/65">
              <p>
                {site.name} wurde von {site.owner} gegründet – aus der
                Überzeugung heraus, dass Handwerk mehr ist als nur ein Job. Es
                ist Verantwortung gegenüber jedem Zuhause, das wir mitgestalten
                dürfen.
              </p>
              <p>
                Über die letzten 20 Jahre ist aus dieser Überzeugung ein
                verlässlicher Betrieb gewachsen, der heute über 500 Projekte
                in und um Bergkamen erfolgreich abgeschlossen hat – von der
                klassischen Estrichverlegung bis zur kompletten
                Haussanierung.
              </p>
              <p>
                Was sich nie geändert hat: der persönliche Kontakt. Bei uns
                sprechen Sie direkt mit den Menschen, die auch auf Ihrer
                Baustelle arbeiten.
              </p>
            </div>
            <div className="mt-8">
              <LinkButton href="/kontakt" variant="ghost-light">
                Projekt besprechen
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(20,15,10,0.18)]">
              <Image
                src="/images/underfloor-heating.jpeg"
                alt="Fachgerecht verlegte Fußbodenheizung im Rohbau"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-stone py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Unsere Werte"
            title="Worauf Sie sich bei uns verlassen können."
          />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <ValueCard key={value.title} title={value.title} text={value.text} />
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/tools-helmet.jpeg"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-light/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
              Inhaber
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl italic text-white sm:text-4xl">
              &bdquo;Qualität ist kein Zufall, sondern das Ergebnis
              ehrlicher Arbeit.&ldquo;
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 font-display text-lg text-gold-light">
              {site.owner}
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Inhaber, {site.name}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
