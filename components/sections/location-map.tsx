import SectionHeading from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { LinkButton } from "@/components/button";
import { site } from "@/lib/site";

export default function LocationMap() {
  return (
    <section className="relative bg-stone py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Standort"
          title="So finden Sie uns."
          subtitle={`${site.address.street}, ${site.address.zipCity}`}
        />

        <Reveal className="mt-14 overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-[0_10px_40px_rgba(20,15,10,0.06)]">
          <iframe
            src={site.address.mapsEmbedSrc}
            title={`Standort von ${site.name} auf Google Maps`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-[360px] w-full sm:h-[460px]"
          />
          <div className="flex flex-col items-start justify-between gap-5 px-7 py-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold-deep">
                {site.name}
              </div>
              <div className="mt-1 font-display text-lg text-ink">
                {site.address.street}, {site.address.zipCity}
              </div>
            </div>
            <LinkButton href={site.address.routeHref} target="_blank" variant="primary">
              Route planen
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
