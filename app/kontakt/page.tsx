import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import { RevealGroup, Reveal } from "@/components/motion-primitives";
import { site } from "@/lib/site";
import ContactForm from "./contact-form";
import ContactInfoCard from "./contact-info-card";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie USLU Estrich & Bodentechnik in Bergkamen für Estricharbeiten, Fußbodenheizung, Haussanierung oder eine kostenlose Beratung. Telefon, WhatsApp und E-Mail.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lassen Sie uns über Ihr Projekt sprechen."
        subtitle="Ob Estricharbeiten, Fußbodenheizung oder komplette Haussanierung – wir freuen uns auf Ihre Anfrage."
        image="/images/consulting-couple.jpeg"
      />

      <section className="relative bg-paper py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-5 lg:px-10">
          <div className="lg:col-span-2">
            <RevealGroup className="space-y-5">
              <ContactInfoCard
                title="Telefon"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2C9.8 20 4 14.2 4 6a2 2 0 0 1 1-2Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                <a href={site.phoneHref} className="block hover:text-gold-deep">
                  {site.phones[0]}
                </a>
                <a href={`tel:+4917664055672`} className="block hover:text-gold-deep">
                  {site.phones[1]}
                </a>
              </ContactInfoCard>

              <ContactInfoCard
                title="WhatsApp Business"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M7 17l-3 1 1-3a7 7 0 1 1 2 2Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-deep"
                >
                  {site.whatsapp}
                </a>
              </ContactInfoCard>

              <ContactInfoCard
                title="E-Mail"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 6h16v12H4z M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                <a href={`mailto:${site.email}`} className="hover:text-gold-deep">
                  {site.email}
                </a>
              </ContactInfoCard>

              <ContactInfoCard
                title="Adresse"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                <a
                  href={site.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-deep"
                >
                  {site.address.street}
                  <br />
                  {site.address.zipCity}
                </a>
              </ContactInfoCard>

              <ContactInfoCard
                title="Öffnungszeiten Büro"
                icon={
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 8v4l3 2 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              >
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <span className="text-ink/50">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </ContactInfoCard>
            </RevealGroup>
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <div className="rounded-3xl border border-ink/8 bg-white p-8 shadow-[0_10px_40px_rgba(20,15,10,0.06)] sm:p-10">
                <h2 className="font-display text-2xl text-ink sm:text-3xl">
                  Schreiben Sie uns
                </h2>
                <p className="mt-2 text-sm text-ink/55">
                  Füllen Sie das Formular aus – wir melden uns in der Regel
                  innerhalb eines Werktags zurück.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-3xl border border-ink/8 shadow-[0_10px_40px_rgba(20,15,10,0.06)]">
              <a
                href={site.address.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-ink px-8 py-6 text-white transition-colors hover:bg-ink-soft"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-light">
                    Standort
                  </div>
                  <div className="mt-1 font-display text-lg">
                    {site.address.street}, {site.address.zipCity}
                  </div>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </Reveal>

            <Reveal
              delay={0.16}
              className="mt-8 overflow-hidden rounded-3xl border border-ink/8 shadow-[0_10px_40px_rgba(20,15,10,0.06)]"
            >
              <iframe
                src={site.address.mapsEmbedSrc}
                title={`Standort von ${site.name} auf Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full grayscale-[15%] sm:h-[420px]"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
