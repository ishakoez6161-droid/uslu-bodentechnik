import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/80">
      <div className="section-divider" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/logo.jpeg"
                  alt="USLU Estrich & Bodentechnik Logo"
                  fill
                  className="object-contain p-1"
                  sizes="44px"
                />
              </span>
              <span className="font-display text-xl text-white">USLU</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Estrich- und Bodentechnik, Fußbodenheizung und Haussanierung aus
              Bergkamen. Zuverlässigkeit, Qualität und persönliche Betreuung
              seit 20 Jahren – Projekte übernehmen wir deutschlandweit.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                WhatsApp Business
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm uppercase tracking-[0.2em] text-gold-light">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="transition-colors hover:text-white">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="transition-colors hover:text-white">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="transition-colors hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="transition-colors hover:text-white">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm uppercase tracking-[0.2em] text-gold-light">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-white">
                  {site.phones[0]}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.address.street}
                  <br />
                  {site.address.zipCity}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Alle Rechte
            vorbehalten.
          </p>
          <p>Inhaber: {site.owner}</p>
        </div>
      </div>
    </footer>
  );
}
