import SectionHeading from "@/components/section-heading";
import GalleryGrid from "@/components/gallery-grid";
import { LinkButton } from "@/components/button";
import { site } from "@/lib/site";

export default function Gallery() {
  return (
    <section className="relative bg-stone py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Unsere Projekte"
          title="Einblicke in unsere Arbeit."
          subtitle={site.serviceArea}
        />

        <div className="mt-16">
          <GalleryGrid items={site.gallery.slice(0, 6)} />
        </div>

        <div className="mt-12 flex justify-center">
          <LinkButton href="/galerie" variant="ghost-light">
            Alle Bilder in der Galerie
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
