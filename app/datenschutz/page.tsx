import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import { Reveal } from "@/components/motion-primitives";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von USLU Estrich & Bodentechnik gemäß DSGVO.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        image="/images/construction-site.jpeg"
      />
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="space-y-10 text-ink/75">
            <div>
              <h2 className="font-display text-2xl text-ink">1. Datenschutz auf einen Blick</h2>
              <h3 className="mt-5 font-semibold text-ink">Allgemeine Hinweise</h3>
              <p className="mt-3 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick
                darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                Sie diese Website besuchen. Personenbezogene Daten sind alle
                Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <h3 className="mt-5 font-semibold text-ink">
                Verantwortliche Stelle
              </h3>
              <p className="mt-3 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website
                ist:
                <br />
                {site.name}, Inhaber {site.owner}
                <br />
                {site.address.street}, {site.address.zipCity}
                <br />
                E-Mail:{" "}
                <a href={`mailto:${site.email}`} className="text-gold-deep hover:underline">
                  {site.email}
                </a>
                <br />
                Telefon: {site.phones[0]}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">
                2. Hosting und Server-Log-Dateien
              </h2>
              <p className="mt-4 leading-relaxed">
                Beim Aufruf dieser Website erhebt unser Hosting-Anbieter
                automatisch Informationen in sogenannten Server-Log-Dateien,
                die Ihr Browser automatisch übermittelt. Dies umfasst
                beispielsweise Browsertyp, verwendetes Betriebssystem,
                Referrer-URL, Hostname des zugreifenden Rechners und Uhrzeit
                der Serveranfrage. Diese Daten werden nicht mit anderen
                Datenquellen zusammengeführt und dienen ausschließlich der
                Gewährleistung eines störungsfreien Betriebs sowie der
                Absicherung unserer Systeme (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">
                3. Kontaktaufnahme
              </h2>
              <p className="mt-4 leading-relaxed">
                Wenn Sie uns per Kontaktformular, E-Mail, Telefon oder
                WhatsApp kontaktieren, werden Ihre Angaben zur Bearbeitung der
                Anfrage sowie für mögliche Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre
                Einwilligung an Dritte weiter. Die Verarbeitung erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage
                der Anbahnung eines Vertrags dient, bzw. auf Grundlage
                unseres berechtigten Interesses an einer wirksamen
                Kundenkommunikation (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p className="mt-3 leading-relaxed">
                Bitte beachten Sie, dass bei der Kontaktaufnahme über
                WhatsApp die Nachrichtenübermittlung über die Server des
                Anbieters WhatsApp (Meta) erfolgt. Es gelten zusätzlich die
                Datenschutzbestimmungen von WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">
                4. Ihre Rechte
              </h2>
              <p className="mt-4 leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
                Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger sowie den Zweck der Datenverarbeitung sowie ein
                Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                Zudem steht Ihnen ein Recht auf Einschränkung der
                Verarbeitung, ein Recht auf Datenübertragbarkeit sowie ein
                Beschwerderecht bei einer Aufsichtsbehörde zu. Hierzu sowie zu
                weiteren Fragen zum Thema Datenschutz können Sie sich
                jederzeit über die im Impressum angegebenen Kontaktdaten an
                uns wenden.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">
                5. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="mt-4 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo;
                auf &bdquo;https://&ldquo; wechselt.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">
                6. Cookies
              </h2>
              <p className="mt-4 leading-relaxed">
                Diese Website verwendet keine Tracking- oder
                Marketing-Cookies. Es werden ausschließlich technisch
                notwendige Funktionen zur Darstellung der Seite genutzt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
