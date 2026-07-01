import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import { Reveal } from "@/components/motion-primitives";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von USLU Estrich & Bodentechnik, Bergkamen.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        image="/images/construction-site.jpeg"
      />
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="space-y-10 text-ink/75">
            <div>
              <h2 className="font-display text-2xl text-ink">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-4 leading-relaxed">
                {site.name}
                <br />
                Inhaber: {site.owner}
                <br />
                {site.address.street}
                <br />
                {site.address.zipCity}
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Kontakt</h2>
              <p className="mt-4 leading-relaxed">
                Telefon: {site.phones[0]} / {site.phones[1]}
                <br />
                E-Mail:{" "}
                <a href={`mailto:${site.email}`} className="text-gold-deep hover:underline">
                  {site.email}
                </a>
                <br />
                WhatsApp Business: {site.whatsapp}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-4 leading-relaxed">
                {site.owner}
                <br />
                {site.address.street}, {site.address.zipCity}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Haftung für Inhalte</h2>
              <p className="mt-4 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Haftung für Links</h2>
              <p className="mt-4 leading-relaxed">
                Unser Angebot enthält gegebenenfalls Links zu externen
                Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch
                keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Urheberrecht</h2>
              <p className="mt-4 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
