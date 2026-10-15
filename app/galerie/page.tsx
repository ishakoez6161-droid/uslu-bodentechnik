import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import GalleryGrid from "@/components/gallery-grid";
import { LinkButton } from "@/components/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Referenzen von USLU Estrich & Bodentechnik: Estricharbeiten, Fußbodenheizung und Sanierungen in Wohnhäusern, Neubauten und Gewerbehallen – aus Bergkamen, deutschlandweit im Einsatz.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Unsere Arbeit in Bildern."
        subtitle="Von der Fußbodenheizung bis zum fertigen Estrich – ein Einblick in Baustellen, die wir mit Sorgfalt umgesetzt haben."
        image="/images/gallery/baustelle-estrichpumpe.jpeg"
      />

      <section className="relative bg-stone py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Referenzen"
            title="Projekte aus unserem Alltag."
            subtitle={site.serviceArea}
          />
          <div className="mt-16">
            <GalleryGrid items={site.gallery} />
          </div>
          <div className="mt-16 flex justify-center">
            <LinkButton href="/kontakt" variant="primary">
              Projekt anfragen
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
