import { Reveal } from "@/components/motion-primitives";
import { LinkButton } from "@/components/button";
import { site } from "@/lib/site";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-stone py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center shadow-[0_30px_80px_rgba(20,15,10,0.25)] sm:px-16">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
            <span className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-gold-light/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
              Jetzt Kontakt aufnehmen
            </span>
            <h2 className="relative font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Bereit für Ihren neuen Boden?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
              Rufen Sie uns an, schreiben Sie uns per WhatsApp oder senden Sie
              eine Nachricht – wir melden uns schnellstmöglich zurück.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <LinkButton href="/kontakt" variant="primary">
                Kontakt aufnehmen
              </LinkButton>
              <LinkButton
                href={site.whatsappHref}
                variant="ghost-dark"
                target="_blank"
              >
                WhatsApp schreiben
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
